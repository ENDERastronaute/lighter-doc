
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
    
    document.querySelectorAll('section.navigable').forEach((section: Element) => {
        sectionsObserver.observe(section);
    });

    document.querySelectorAll('ul.navul').forEach((ul: Element) => {
        const ulObserver = new MutationObserver(() => {
            const hasActiveItem = Array.from(ul.children).some((li: any) => li.classList.contains(styles.active));

            if (hasActiveItem) {          
                ul.parentElement?.classList.add(styles.active);
            }
            else {
                ul.parentElement?.classList.remove(styles.active);
            }

        });

        ulObserver.observe(ul, { attributes: true, subtree: true });
    });
}