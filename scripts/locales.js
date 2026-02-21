const locales = {
    en: {
        navName: "Artist Name",
        navWorks: "Works",
        navShowreel: "Showreel",
        navAbout: "About",
        downloadResume: "Download Resume (PDF)",
        heroTitle: "Hi, I'm <span class='highlight'>Winner</span>",
        heroSubtitle: "3D Rigger & Technical Artist",
        heroText: "I am passionate about rigging and tool development, constantly seeking opportunities to improve myself and learn new things to support the pipeline and solve problems for the team.",
        aboutTitle: "About Me",
        aboutDesc: "I began studying 3D Animation seriously in 2021 while attending Suankularb Wittayalai School in Bangkok, and later enrolled at the College of Arts, Media and Technology (CAMT) at Chiang Mai University.\n\nDuring group projects, I developed a strong interest in Rigging and experimented with creating tools to streamline team workflows and increase efficiency.\n\nI am deeply interested in the technical behind-the-scenes work of animation. I am always ready to learn new skills and adapt continuously to grow in my career and support my team effectively.",
        contactMe: "Contact Me :",
        resumeUrl: "assets/docs/Resume_EN.pdf",
        footerText: "© 2026 Suthiphan Khamnong. All rights reserved.",
        backToWorks: "← Back to Works",
        otherWorksTitle: "Additional Works",
        catAll: "All",
        catRigging: "Rigging",
        catCfx: "CFX",
        catTechnical: "Technical",
        catModeling: "Modeling",
        catOthers: "Others",
        catRiggingSubtitle: "A collection of technical and artistic projects focused on character movement and anatomy.",
        catCfxSubtitle: "Simulations of complex dynamics, including cloth, hair, and soft body physics.",
        catTechnicalSubtitle: "Pipeline tools and scripting solutions to optimize production workflows.",
        catModelingSubtitle: "High-quality 3D assets ranging from mechanical designs to modular environments.",
        catOthersSubtitle: "Miscellaneous artistic explorations and experimental projects.",
        seeMoreBtn: "See More Projects",
        otherRig1: "Facial Rig Module",
        otherRig2: "Quadruped Limb Rig",
        otherCfx1: "Vellum Gown Sim",
        otherCfx2: "Hair Groom Dynamics",
        otherTech1: "Pipeline Toolset",
        otherTech2: "Asset Validator",
        otherMod1: "Hard Surface Drone",
        otherMod2: "Environment Props",
        otherOther1: "Speed Sculpting",
        riggingProjects: [
            {
                title: "Advanced Bipedal Autorig",
                desc: "A modular rigging system built in Python, supporting custom limb configurations, stretchy bones, and automated space switching.",
                image: "assets/images/work1.png"
            },
            {
                title: "Facial Rig Module",
                desc: "Shape-key and bone-based hybrid facial rig with intuitive GUI controls for complex expressions.",
                image: "assets/images/work1.png"
            },
            {
                title: "Quadruped Limb Rig",
                desc: "Dynamic quadruped leg setup with advanced IK/FK switching and anatomical muscle preservation.",
                image: "assets/images/work1.png"
            }
        ],
        cfxProjects: [
            {
                title: "Vellum Gown Simulation",
                desc: "High-fidelity garment simulation using Houdini Vellum for realistic fabric behavior under fast movement.",
                image: "assets/images/work3.png"
            },
            {
                title: "Hair Groom Dynamics",
                desc: "Advanced hair simulation using guide-based dynamics and collision handling for character performances.",
                image: "assets/images/work3.png"
            }
        ],
        technicalProjects: [
            {
                title: "Asset Publisher Tool",
                desc: "Automated pipeline tool for validating and publishing 3D assets to a studio-wide database.",
                image: "assets/images/work2.png"
            },
            {
                title: "Render Layer Manager",
                desc: "Blender addon for managing complex render layers and passes for multi-shot production.",
                image: "assets/images/work2.png"
            }
        ],
        modelingProjects: [
            {
                title: "Hard Surface Drone",
                desc: "Detailed mechanical design with optimized topology for close-up renders.",
                image: "assets/images/work1.png"
            },
            {
                title: "Modular Environment Props",
                desc: "A set of high-to-low poly baked props for modular environment building in game engines.",
                image: "assets/images/work1.png"
            }
        ],
        othersProjects: [
            {
                title: "Speed Sculpting Collection",
                desc: "A series of 1-2 hour speed sculpts focusing on anatomy and character silhouette.",
                image: "assets/images/hero.png"
            }
        ],
        topWorksTitle: "Featured Works",
        work1Title: "Advanced Character Rig",
        work1Desc: "Custom Python pipeline for automated facial rigging in Blender.",
        work2Title: "Sci-Fi Environment",
        work2Desc: "Real-time modular environment created in Unreal Engine.",
        work3Title: "OGC Cloth Engine Integration for Blender",
        work3Desc: "High-performance cloth simulation utilizing techniques from University of Utah and NVIDIA research, computed primarily on the GPU via NVIDIA Warp.",
        work3OverviewTitle: "Project Overview",
        work3OverviewDesc: "This project was born from a real-world production challenge while I was handling CFX for a team animation project. Frustrated by persistent self-collision issues, I delved into the underlying physics of cloth simulation. I discovered a cutting-edge research paper from the University of Utah and NVIDIA showcasing the OGC (Offset Geometric Contact) technique. Built on the NVIDIA Warp framework, it guarantees non-penetrating cloth. Inspired, I challenged myself to implement this technology directly into Blender.",
        work3BlenderIssuesTitle: "Blender Internal vs OGC Architecture",
        work3BlenderIssuesDesc: "1. Technical Solver Architecture\n• Blender Cloth: Uses a Mass-Spring Model (Provot model). It treats the mesh as a network of vertices connected by springs. To prevent clothing from falling through itself or the body, it relies on Continuous Collision Detection (CCD), which is computationally expensive and prone to 'explosions' if the character moves too fast.\n\n• OGC (Offset Geometric Contact): Uses a Volumetric Offset approach. Instead of checking if a point has crossed a thin triangle, it creates a small 'buffer volume' around the cloth. This allows for guaranteed penetration-free simulation without needing the heavy math of CCD.",
        work3OgcSolutionTitle: "Our Hybrid Solution",
        work3OgcSolutionDesc: "The original OGC method used a 'Log-Barrier' force which caused jitter. We created a 'Hybrid' setup:\n1. Stopped the Jitter: We replaced the infinite force field with a simple Linear Spring (like a rubber band). It pushes back gently and predictably.\n2. Kept the Safety: We kept the 'Safety Bubbles' (Conservative Bounds) from OGC. Even though the spring is gentle, the bubble acts as a hard wall that stops the cloth from ever clipping through the character.",
        work3WhyItMattersTitle: "Why It Matters",
        work3WhyItMattersDesc: "This gives us the best of both worlds: the stability of standard game physics (no jitter) with the guarantee of academic research (no clipping), all running in real-time in Blender.",
        work3ReferencesTitle: "References",
        work3ReferencesDesc: "Paper: 'Offset Geometric Contact for Cloth Simulation' (SIGGRAPH 2025)\nSource Code: Implementation based on original research (C++ to Warp-Python port).",
    },
    th: {
        navName: "Artist Name",
        navWorks: "ผลงาน",
        navShowreel: "โชว์รีล",
        navAbout: "เกี่ยวกับผม",
        downloadResume: "ดาวน์โหลดเรซูเม่ (PDF)",
        heroTitle: "สวัสดีครับ ผม <span class='highlight'>Winner</span>",
        heroSubtitle: "3D Rigger & Technical Artist",
        heroText: "ผมสนใจงานด้าน Rigging และการพัฒนาเครื่องมือ โดยมุ่งหาโอกาสพัฒนาตัวเองเเละเรียนรู้สิ่งใหม่ๆตลอดเวลาเพื่อสนับสนุนการทำงานเเละเเก้ปัญหาให้ทีม",
        aboutTitle: "เกี่ยวกับผม",
        aboutDesc: "ผมเริ่มศึกษาด้าน 3D Animation อย่างจริงจังในปี 2021 ระหว่างศึกษาอยู่ที่โรงเรียนสวนกุหลาบวิทยาลัย กรุงเทพมหานคร และต่อมาได้เข้าศึกษาที่วิทยาลัยศิลปะ สื่อ และเทคโนโลยี มหาวิทยาลัยเชียงใหม่\n\nระหว่างการทำโปรเจกต์กลุ่ม ผมได้มีความสนใจในด้าน Rigging และได้ทดลองพัฒนาเครื่องมือเพื่อช่วยให้กระบวนการทำงานของทีมเป็นระบบและมีประสิทธิภาพมากขึ้น\n\nผมสนใจงานเบื้องหลังเชิงเทคนิคของงานแอนิเมชัน ผมพร้อมเรียนรู้ทักษะใหม่ ๆ และปรับตัวอย่างต่อเนื่อง เพื่อเติบโตในสายงานและสนับสนุนทีมให้ทำงานได้อย่างมีประสิทธิภาพยิ่งขึ้น",
        contactMe: "ติดต่อผม :",
        resumeUrl: "assets/docs/Resume_TH.pdf",
        footerText: "© 2026 Suthiphan Khamnong. All rights reserved.",
        backToWorks: "← กลับสู่หน้าผลงาน",
        otherWorksTitle: "ผลงานอื่นๆ",
        catAll: "ทั้งหมด",
        catRigging: "ริกกิ้ง",
        catCfx: "CFX",
        catTechnical: "เทคนิคอล",
        catModeling: "โมเดลลิ่ง",
        catOthers: "อื่น ๆ",
        catRiggingSubtitle: "รวบรวมโปรเจกต์เชิงเทคนิคและศิลปะที่มุ่งเน้นไปที่การเคลื่อนไหวของตัวละครและกายวิภาค",
        catCfxSubtitle: "การจำลองไดนามิกที่ซับซ้อน รวมถึงผ้า เส้นผม และฟิสิกส์ของวัตถุที่อ่อนนุ่ม",
        catTechnicalSubtitle: "เครื่องมือ Pipeline และโซลูชันการเขียนสคริปต์เพื่อเพิ่มประสิทธิภาพการทำงาน",
        catModelingSubtitle: "Asset 3D คุณภาพสูง ตั้งแต่การออกแบบเครื่องจักรไปจนถึงสภาพแวดล้อมแบบโมดูล่า",
        catOthersSubtitle: "งานศิลปะเบ็ดเตล็ดและการทดลองโปรเจกต์อื่น ๆ",
        seeMoreBtn: "ดูผลงานอื่น ๆ",
        otherRig1: "โมดูลริกใบหน้า",
        otherRig2: "ริกสัตว์สี่เท้า",
        otherCfx1: "จำลองผ้าชุดราตรี",
        otherCfx2: "จำลองเส้นผม",
        otherTech1: "ชุดเครื่องมือ Pipeline",
        otherTech2: "ระบบตรวจสอบ Asset",
        otherMod1: "โมเดลโดรน",
        otherMod2: "พร็อพประกอบฉาก",
        otherOther1: "งานปั้นความเร็วสูง",
        riggingProjects: [
            {
                title: "ระบบ Autorig สิ่งมีชีวิตสองเท้าขั้นสูง",
                desc: "ระบบริกกิ้งแบบโมดูล่าที่สร้างด้วย Python รองรับการกำหนดค่าแขนขาแบบกำหนดเอง กระดูกแบบยืดหยุ่น และการสลับพื้นที่ทำงานอัตโนมัติ",
                image: "assets/images/work1.png"
            },
            {
                title: "โมดูลริกใบหน้า",
                desc: "ริกใบหน้าแบบไฮบริดที่ใช้ทั้ง Shape-key และกระดูก พร้อมแผงควบคุม GUI ที่ใช้งานง่ายสำหรับการแสดงอารมณ์ที่ซับซ้อน",
                image: "assets/images/work1.png"
            },
            {
                title: "ริกสัตว์สี่เท้า",
                desc: "การตั้งค่าขาสัตว์สี่เท้าแบบไดนามิกพร้อมการสลับ IK/FK ขั้นสูงและการรักษาปริมาตรกล้ามเนื้อตามหลักกายวิภาค",
                image: "assets/images/work1.png"
            }
        ],
        cfxProjects: [
            {
                title: "การจำลองชุดราตรีด้วย Vellum",
                desc: "การจำลองเครื่องแต่งกายความละเอียดสูงโดยใช้ Houdini Vellum เพื่อพฤติกรรมของผ้าที่สมจริงภายใต้การเคลื่อนไหวที่รวดเร็ว",
                image: "assets/images/work3.png"
            },
            {
                title: "ไดนามิกการจำลองเส้นผม",
                desc: "การจำลองเส้นผมขั้นสูงโดยใช้ไดนามิกแบบอ้างอิงเส้นไกด์และการจัดการการชนสำหรับการแสดงของตัวละคร",
                image: "assets/images/work3.png"
            }
        ],
        technicalProjects: [
            {
                title: "เครื่องมือ Asset Publisher",
                desc: "เครื่องมือ Pipeline อัตโนมัติสำหรับการตรวจสอบและเผยแพร่ Asset 3D ไปยังฐานข้อมูลหลักของสตูดิโอ",
                image: "assets/images/work2.png"
            },
            {
                title: "ระบบจัดการ Render Layer",
                desc: "Blender addon สำหรับจัดการ Render layer และ multipass ที่ซับซ้อนสำหรับการผลิตแอนิเมชันหลายช็อต",
                image: "assets/images/work2.png"
            }
        ],
        modelingProjects: [
            {
                title: "โมเดลโดรนกลไก",
                desc: "การออกแบบเครื่องจักรที่มีรายละเอียดสูงพร้อม Topology ที่เหมาะสมสำหรับการเรนเดอร์ระยะใกล้",
                image: "assets/images/work1.png"
            },
            {
                title: "พร็อพสภาพแวดล้อมแบบโมดูล่า",
                desc: "ชุดพร็อพที่ผ่านการ Bake จาก High poly เป็น Low poly สำหรับการสร้างฉากแบบโมดูล่าใน Game Engine",
                image: "assets/images/work1.png"
            }
        ],
        othersProjects: [
            {
                title: "รวมงานปั้นความเร็วสูง",
                desc: "ชุดงานปั้นที่ใช้เวลา 1-2 ชั่วโมง เน้นที่กายวิภาคและรูปทรงของตัวละคร",
                image: "assets/images/hero.png"
            }
        ],
        topWorksTitle: "ผลงานหลัก",
        work1Title: "ระบบริกตัวละครอัจฉริยะ",
        work1Desc: "พัฒนาเครื่องมือ Python เพื่อทำ Facial Rig อัตโนมัติ",
        work2Title: "ฉากสภาพแวดล้อม Sci-Fi",
        work2Desc: "สร้างฉากแบบ Modular แบบ Real-time ใน Unreal Engine",
        work3Title: "พัฒนาระบบ Simulate ผ้าเเบบ OGC ใน Blender",
        work3Desc: "ระบบจำลองผ้าประสิทธิภาพสูงด้วยเทคนิคจากงานวิจัยมหาวิทยาลัย Utah เเละ Nvidia คำนวณผ่าน Nvidia Warp โดยใช้ GPU เป็นหลัก",
        work3OverviewTitle: "ภาพรวมโปรเจกต์",
        work3OverviewDesc: "โปรเจกต์นี้เริ่มต้นจากการที่ผมพยายามหาวิธีแก้ปัญหาผ้าทะลุผ่านตัวมันเอง ขณะทำหน้าที่ CFX ให้กับโปรเจกต์แอนิเมชันของทีม ประสบการณ์นี้ทำให้ผมได้เจาะลึกลงไปในเทคนิคการจำลองผ้าเบื้องหลัง และได้พบกับงานวิจัยล่าสุดจาก University of Utah ร่วมกับ NVIDIA ซึ่งแนะนำเทคนิค OGC (Offset Geometric Contact) บนเฟรมเวิร์ค NVIDIA Warp ที่รับประกันว่าผ้าจะไม่ทะลุกัน ผมจึงตัดสินใจท้าทายตัวเองด้วยการพอร์ตเทคโนโลยีนี้มาใช้งานใน Blender",
        work3BlenderIssuesTitle: "สถาปัตยกรรมภายในของ Blender เทียบกับ OGC",
        work3BlenderIssuesDesc: "1. สถาปัตยกรรมของตัวประมวลผลทางเทคนิค\n• Blender Cloth: ใช้โมเดล Mass-Spring (โมเดล Provot) โดยมองโครงตาข่ายเป็นเครือข่ายของจุดที่เชื่อมต่อกันด้วยสปริง เพื่อป้องกันไม่ให้เสื้อผ้าหล่นทะลุตัวเองหรือร่างกาย มันจึงต้องใช้ Continuous Collision Detection (CCD) ซึ่งมีการประมวลผลที่หนักหน่วงและมีโอกาสเกิดการ 'ระเบิด' หากตัวละครเคลื่อนที่เร็วเกินไป\n\n• OGC (Offset Geometric Contact): ใช้แนวทาง Volumetric Offset แทนที่จะตรวจสอบว่าจุดข้ามขอบรูปสามเหลี่ยมที่บางหรือไม่ มันจะสร้าง 'ปริมาณบัฟเฟอร์' ขนาดเล็กรอบๆ ผ้า วิธีนี้ช่วยให้รับประกันการจำลองที่ไร้การซึมผ่านโดยไม่จำเป็นต้องใช้การคำนวณทางคณิตศาสตร์ที่หนักหน่วงของ CCD",
        work3OgcSolutionTitle: "แนวทางแก้ไขแบบ Hybrid ของเรา",
        work3OgcSolutionDesc: "วิธีการ OGC แบบดั้งเดิมใช้แรงแบบ 'Log-Barrier' ซึ่งทำให้เกิดการสั่น เราจึงสร้างระบบ 'Hybrid' ขึ้นมา:\n1. หยุดการสั่น (Jitter): เราแทนที่สนามพลังที่เป็นค่าอนันต์ด้วย Linear Spring (เหมือนยางยืด) แบบง่ายๆ ซึ่งจะผลักกลับอย่างนุ่มนวลและคาดการณ์ได้\n2. รักษาความปลอดภัย: เรายังคงเก็บ 'Safety Bubbles' (Conservative Bounds) จาก OGC ไว้ แม้ว่าสปริงจะนุ่มนวล แต่ฟองสบู่จะทำหน้าที่เป็นผนังแข็งที่ป้องกันไม่ให้ผ้าทะลุผ่านตัวละคร",
        work3WhyItMattersTitle: "ทำไมสิ่งนี้ถึงสำคัญ",
        work3WhyItMattersDesc: "สิ่งนี้ทำให้เราได้สิ่งที่ดีที่สุดจากทั้งสองโลก: ความเสถียรของฟิสิกส์เกมมาตรฐาน (ไม่มีการสั่น) พร้อมการรับประกันจากการวิจัยทางวิชาการ (ไม่มีการทะลุ) ทั้งหมดนี้ทำงานแบบ Real-time ใน Blender",
        work3ReferencesTitle: "เอกสารอ้างอิง",
        work3ReferencesDesc: "งานวิจัย: 'Offset Geometric Contact for Cloth Simulation' (SIGGRAPH 2025)\nซอร์สโค้ด: การตั้งค่าที่สร้างขึ้นจากการวิจัยดั้งเดิม (พอร์ตจาก C++ เป็น Warp-Python)",
    }
};
