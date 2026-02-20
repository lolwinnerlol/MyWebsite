/**
 * Interactive Particle Canvas Background
 * A clean, physics-based fluid particle system for a formal dark theme.
 */

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("global-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for solid background
    let width, height;

    // Configuration
    const config = {
        particleCount: Math.min(window.innerWidth / 10, 150), // Responsive count
        colors: [],
        bgColor: '',
        mouseRadius: 300,
        mouseForce: 0.05,
        baseSpeed: 0.3
    };

    let particles = [];

    window.updateCanvasColors = function (theme) {
        if (theme === 'light') {
            config.colors = ['#2a6bb2', '#4a9df8', '#8a9ab8', '#424659'];
            config.bgColor = '#f4f6fa';
        } else {
            config.colors = ['#4a9df8', '#2a6bb2', '#1a1b26', '#9ea3b5'];
            config.bgColor = '#0a0b10';
        }

        // Update existing particles if they exist
        if (particles && particles.length > 0) {
            particles.forEach(p => {
                p.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            });
        }
    };

    // Set initial colors based on current theme, default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';
    window.updateCanvasColors(currentTheme);

    let mouse = {
        x: null,
        y: null,
        radius: config.mouseRadius
    };

    // Track mouse over the entire window for global effect
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        setupCanvas();
        initParticles();
    });

    function setupCanvas() {
        const dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        // Scale context to ensure correct drawing operations
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;

            // Random elongated shapes
            this.width = Math.random() * 8 + 2;
            this.height = Math.random() * 2 + 1;

            // Base velocity
            this.vx = (Math.random() - 0.5) * config.baseSpeed;
            this.vy = (Math.random() - 0.5) * config.baseSpeed;

            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            this.angle = Math.random() * Math.PI * 2;

            // Create a randomized offset so they target a scattered cloud around the mouse, not the exact center
            this.orbitRadius = Math.random() * 80 + 20;
            this.orbitAngle = Math.random() * Math.PI * 2;

            // Give each particle a tiny unique speed so they orbit independently
            // Some go clockwise, some counter-clockwise
            this.orbitSpeed = (Math.random() - 0.5) * 0.0005; // Extremely slow base rotation

            this.offsetX = Math.cos(this.orbitAngle) * this.orbitRadius;
            this.offsetY = Math.sin(this.orbitAngle) * this.orbitRadius;

            // Randomize how close this individual particle can get to its target spot
            this.coreRadius = Math.random() * 15 + 5;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.6;

            // Draw tech-like dash/line
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
            ctx.restore();
        }

        update() {
            // Apply mouse force
            if (mouse.x !== undefined && mouse.y !== undefined) {
                // Check if the particle is within the general mouse interaction radius
                let mouseDx = mouse.x - this.x;
                let mouseDy = mouse.y - this.y;
                let mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

                if (mouseDistance < mouse.radius) {
                    if (mouseDistance === 0) mouseDistance = 0.1;

                    let dirX = mouseDx / mouseDistance;
                    let dirY = mouseDy / mouseDistance;

                    // Tangent vector for orbit (perpendicular to target direction)
                    // Use the sign of orbitSpeed to determine clockwise vs counter-clockwise
                    let orbitDir = Math.sign(this.orbitSpeed) === 0 ? 1 : Math.sign(this.orbitSpeed);
                    let tangentX = -dirY * orbitDir;
                    let tangentY = dirX * orbitDir;

                    // Gravity pull: falls off exponentially based on distance from the cursor
                    let ratio = mouseDistance / mouse.radius;
                    if (ratio > 1) ratio = 1;

                    // Exponential falloff curve (quadratic/cubic)
                    let falloff = Math.pow(1.0 - ratio, 3);

                    let gravityForce = falloff * this.density * (config.mouseForce * 0.5);

                    // Orbit force: pushes them sideways to create an orbit, much slower now
                    let orbitForce = falloff * this.density * (config.mouseForce * 0.25);

                    // Repulsion core: prevents them from collapsing into the singular center
                    let repulsionForce = 0;
                    if (mouseDistance < this.orbitRadius) {
                        repulsionForce = ((this.orbitRadius - mouseDistance) / this.orbitRadius) * this.density * (config.mouseForce * 2.0);
                    }

                    // Apply all physics forces
                    this.vx += dirX * (gravityForce - repulsionForce);
                    this.vy += dirY * (gravityForce - repulsionForce);

                    this.vx += tangentX * orbitForce;
                    this.vy += tangentY * orbitForce;

                    // Friction helps stabilize the orbit so they don't slingshot out
                    this.vx *= 0.92;
                    this.vy *= 0.92;
                }
            }

            // Apply friction and base velocity recovery
            this.vx *= 0.98;
            this.vy *= 0.98;

            // Add a small constant drift
            this.x += this.vx + (Math.sin(this.angle) * config.baseSpeed);
            this.y += this.vy + (Math.cos(this.angle) * config.baseSpeed);

            // Slow rotation
            this.angle += (this.vx * 0.02);

            // Wrap around edges
            if (this.x < -20) this.x = width + 20;
            if (this.x > width + 20) this.x = -20;
            if (this.y < -20) this.y = height + 20;
            if (this.y > height + 20) this.y = -20;
        }
    }

    function initParticles() {
        particles = [];
        let count = Math.min(width / 10, 200); // Responsive count based on current width
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        // Fill background
        ctx.fillStyle = config.bgColor;
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
    }

    // Start
    setupCanvas();
    initParticles();
    animate();
});
