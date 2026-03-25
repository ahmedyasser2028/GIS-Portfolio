document.addEventListener('DOMContentLoaded', () => {
    const projectPath = "Projects/";
    const certPath = "Certficates/";

    const myProjects = [
        { title: "PMMS - Al Madinah", desc: "Pavement Maintenance Management System for road resurfacing projects in Madinah.", tags: ["Roads GIS", "Asset Management"], img: projectPath + "PMMS.png" },
        { title: "AI Feature Extraction", desc: "Deep Learning (dlpk) for automated wind turbine detection from satellite imagery.", tags: ["AI", "Deep Learning"], img: projectPath + "Capture.PNG" },
        { title: "Damage Assessment (AI)", desc: "Classifying post-hazard structural damage using object-based Machine Learning.", tags: ["ML", "Remote Sensing"], img: projectPath + "1.PNG" },
        { title: "Electric Utility Mapping", desc: "Modeling and digitizing electricity networks (MV/LV) for infrastructure.", tags: ["Utility GIS"], img: projectPath + "arbun.jfif" },
        { title: "Blue Whale Migration", desc: "Spatio-temporal visualization of migration routes with glow effects.", tags: ["Cartography"], img: projectPath + "blue Whale.jpg" },
        { title: "Population Ops Dashboard", desc: "Interactive demographics dashboard for Egypt using Arcade expressions.", tags: ["Dashboards", "Arcade"], img: projectPath + "Dashboard.PNG" },
        { title: "Maritime Piracy Trends", desc: "Global density analysis and hotspot mapping of maritime security incidents.", tags: ["Security GIS"], img: projectPath + "Maritime Piracy.jpg" },
        { title: "Marine Estuary Study", desc: "Environmental mapping of the American River shoreline ecosystems.", tags: ["Environment"], img: projectPath + "American River Marine Estuary.jfif" },
        { title: "Global Volcano Activity", desc: "Temporal visualization of global volcanic events over time.", tags: ["Time Series"], img: projectPath + "Volcano.mp4", isVideo: true },
        { title: "Hurricane Track Mapping", desc: "Visualizing global natural disaster paths and landfall predictions.", tags: ["Disaster Mapping"], img: projectPath + "Hurricane Map.png" },
        { title: "Drought Monitoring", desc: "Vegetation health tracking using multi-spectral satellite indices.", tags: ["Remote Sensing"], img: projectPath + "Drought.jpg" },
        { title: "Iceberg Tracking", desc: "Monitoring polar ice dynamics and maritime navigation hazards.", tags: ["Environmental GIS"], img: projectPath + "Iceberg.jpg" },
        { title: "Arab Elevation Model", desc: "Terrain analysis and grid-style elevation modeling of Arab countries.", tags: ["Terrain Analysis"], img: projectPath + "Arab Countries.png" },
        { title: "California Voter Patterns", desc: "Geopolitical analysis of voting distributions across California.", tags: ["Geopolitics"], img: projectPath + "California Votes.jpg" },
        { title: "Air Quality Stats", desc: "Statistical mapping of hourly ozone concentration levels (2010-2011).", tags: ["Spatial Statistics"], img: projectPath + "Average Hourly Ozone.jpg" },
        { title: "Cholera Outbreak Mapping", desc: "Health geography analysis of cholera hotspots and trends.", tags: ["Health GIS"], img: projectPath + "Cholera.PNG" }
    ];

    const certCategories = [
        { 
            name: "AI & Deep Learning (2025)", color: "border-l-blue-500", 
            items: [
                { name: "Deep Learning Using ArcGIS Pro", file: "Deep Learning Using ArcGIS Pro_Certificate_03202025.pdf" },
                { name: "Deep Learning Using ArcGIS Online", file: "Deep Learning Using ArcGIS Online_Certificate_03212025.pdf" },
                { name: "Classifying Objects via Deep Learning", file: "Classifying Objects Using Deep Learning in ArcGIS Pro_Certificate.pdf" },
                { name: "Feature Extraction via Deep Learning", file: "Extracting Features with Deep Learning Using ArcGIS Online_Certificate_03222025.pdf" }
            ] 
        },
        { 
            name: "Python Automation (2025)", color: "border-l-emerald-500", 
            items: [
                { name: "Python for Everyone", file: "Python for Everyone_Certificate_02062025.pdf" },
                { name: "Python Scripting for Geoprocessing", file: "Python Scripting for Geoprocessing Workflows_Certificate_02092025.pdf" },
                { name: "Automating Map Series & Layouts", file: "Python Scripting_ Modifying Map Series_Certificate_02092025.pdf" },
                { name: "Repairing Spatial Data Sources", file: "Python Scripting_ Repairing Data Sources_Certificate_02062025.pdf" }
            ] 
        },
        { 
            name: "Advanced Data Quality", color: "border-l-purple-500", 
            items: [
                { name: "Managing Quality (Data Reviewer)", file: "Managing Data Quality Using ArcGIS Data Reviewer_Certificate_01132025.pdf" },
                { name: "Automating Data Validation", file: "Data QC with ArcGIS_ Automating Validation_Certificate_01112025.pdf" },
                { name: "Visual Review QC Techniques", file: "Data QC with ArcGIS- Visual Review_Certificate_01202025.pdf" }
            ] 
        },
        { 
            name: "Global Credentials", color: "border-l-yellow-500", 
            items: [
                { name: "PMP Preparation Certification", file: "PMP.pdf" }
            ] 
        }
    ];

    // Inject Projects
    const projContainer = document.getElementById("projectsContainer");
    myProjects.forEach(p => {
        const mediaTag = p.isVideo ? `<video src="${p.img}" class="w-full h-full object-cover" muted loop onmouseover="this.play()" onmouseout="this.pause()"></video>` : `<img src="${p.img}" class="w-full h-full object-cover transition-transform duration-700">`;
        projContainer.innerHTML += `
            <div class="project-card bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 transition duration-500 group shadow-2xl">
                <div class="h-60 overflow-hidden relative shadow-inner">${mediaTag}</div>
                <div class="p-8">
                    <div class="flex gap-2 mb-4">${p.tags.map(t => `<span class="text-[9px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full uppercase font-black tracking-tighter">${t}</span>`).join('')}</div>
                    <h3 class="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors font-bold">${p.title}</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">${p.desc}</p>
                </div>
            </div>`;
    });

    // Inject Certificates
    const certContainer = document.getElementById("certContainer");
    certCategories.forEach(cat => {
        certContainer.innerHTML += `
            <div class="bg-slate-900/20 border-l-4 ${cat.color} p-10 rounded-3xl border-y border-r border-slate-800 hover:bg-slate-900/40 transition duration-300">
                <h3 class="text-white font-black mb-10 uppercase tracking-[0.3em] text-xs font-bold">${cat.name}</h3>
                <ul class="space-y-6">
                    ${cat.items.map(item => `
                        <li class="cert-row flex justify-between items-center group cursor-pointer">
                            <a href="${certPath + item.file}" target="_blank" class="flex-1">
                                <div class="flex justify-between items-center">
                                    <span class="text-slate-400 group-hover:text-blue-400 transition text-xs font-semibold tracking-wide">${item.name}</span>
                                    <span class="view-link text-[10px] font-black text-blue-500 whitespace-nowrap ml-4 font-bold">VIEW PDF ↗</span>
                                </div>
                            </a>
                        </li>`).join('')}
                </ul>
            </div>`;
    });
});