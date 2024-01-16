
export default function observeSections(setActiveSection: any, styles: any) {
    const sectionsObserver = new IntersectionObserver((entries) => {
        let firstSection: IntersectionObserverEntry = entries[0];
    
        entries.forEach(entry => {
            if (firstSection !== entry && entry.isIntersecting && entry.boundingClientRect.top < firstSection.boundingClientRect.top) {
                firstSection = entry;
            }
        })
        
    
        firstSection && setActiveSection(firstSection.target.id);
        
    }, { threshold: 1.0 });
    
    document.querySelectorAll('section.navigable').forEach(section => {
        sectionsObserver.observe(section);
    });

    document.querySelectorAll('ul.navul').forEach((ul: any) => {
        const ulObserver = new MutationObserver(() => {
            const hasActiveItem = Array.from(ul.children[0].childNode).some((li: any) => li.classList.contains('active'));      
            
            console.log(hasActiveItem);
            

            if (hasActiveItem && !ul.parentElement.classList.contains(styles.active)) {
                console.log('on');
                
                ul.parentElement.classList.toggle(styles.active);
            }
            else {
                ul.parentElement.classList.remove(styles.active);
            }
        });

        ulObserver.observe(ul, { attributes: true, subtree: true });
    });
}