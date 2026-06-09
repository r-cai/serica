function positionBridge() {
    const servicesBtn = document.getElementById('navbar-services');
    const dropdown = document.getElementById('services-dropdown');
    const bridge = document.getElementById('services-bridge');

    const btnRect = servicesBtn.getBoundingClientRect();
    const dropRect = dropdown.getBoundingClientRect();

    bridge.style.position = 'fixed';
    bridge.style.left   = 'calc(' + btnRect.left + 'px - 1vw' + ')';
    bridge.style.top    = btnRect.top + 'px';
    bridge.style.width  = 'calc(' + btnRect.width + 'px + 2vw' + ')';

    bridge.style.height = (dropRect.top - btnRect.top) + 'px';

    bridge.style.zIndex = '999';
    bridge.style.background = 'transparent';
    bridge.style.pointerEvents = 'auto';
}
        
const serviceDropdown = document.getElementById('navbar-services');
const serviceDropdownMenu = document.getElementById('services-dropdown');
serviceDropdown.addEventListener('mouseover', () => {
    serviceDropdownMenu.style['border-top'] = '1px solid #281822';
    serviceDropdownMenu.style['max-height'] = '600px';
    serviceDropdownMenu.style['padding'] = '15px 15%';
    if(window.matchMedia("(min-width: 992px)").matches){
        positionBridge();
    }
});
$('#navbarNavAltMarkup').on('hide.bs.collapse', function() {
    serviceDropdownMenu.style['border'] = 'none';
    serviceDropdownMenu.style['max-height'] = '0px';
    document.getElementById('services-bridge').style['height'] = '0px';
    serviceDropdownMenu.style['padding'] = '0px 10px';
});
serviceDropdown.addEventListener('click', (e) => {
    if(window.matchMedia("(max-width: 992px)").matches){
        e.preventDefault();
        const isOpen = getComputedStyle(serviceDropdownMenu)['max-height'] !== '0px';
        if(!isOpen){
            serviceDropdownMenu.style['border-top'] = '1px solid #281822';
            serviceDropdownMenu.style['max-height'] = '600px';
            serviceDropdownMenu.style['padding'] = '15px 10px';

            const navOpen = document.getElementById('navbar-check-bound').getBoundingClientRect();
            // const scrollHeight = window.innerHeight - navOpen.bottom;
            
            // serviceDropdownMenu.style['height'] = scrollHeight + 'px';
            // serviceDropdownMenu.style['overflowY'] = 'auto';
            const btnRect = serviceDropdown.getBoundingClientRect();
            const displayHeight = navOpen.bottom-btnRect.bottom;
            console.log(displayHeight);
            serviceDropdownMenu.style.setProperty('margin-top', '-' + displayHeight + 'px', 'important');
            
            const initialWidth = window.innerWidth;
            window.addEventListener('resize', function handleResize(){
                if(window.innerWidth === initialWidth){
                    window.addEventListener('resize', function handleResize(){}, {once:true});
                    return;
                }
                else {
                    serviceDropdownMenu.style['border'] = 'none';
                    serviceDropdownMenu.style['max-height'] = '0px';
                    document.getElementById('services-bridge').style['height'] = '0px';
                    serviceDropdownMenu.style['padding'] = '0px 10px';
                }

            }, {once: true});

        }
        else if(isOpen){
            serviceDropdownMenu.style['border'] = 'none';
            serviceDropdownMenu.style['max-height'] = '0px';
            document.getElementById('services-bridge').style['height'] = '0px';
            serviceDropdownMenu.style['padding'] = '0px 10px';
            // serviceDropdownMenu.style['flex-wrap'] = 'wrap';

        }
    }
});
document.getElementById('service-dropdown-menu').addEventListener('mouseleave', (e) => {
    if (!serviceDropdownMenu.contains(e.relatedTarget)){
        serviceDropdownMenu.style['border'] = 'none';
        serviceDropdownMenu.style['max-height'] = '0px';
        document.getElementById('services-bridge').style['height'] = '0px';
        serviceDropdownMenu.style['padding'] = '0px 15%';
    }
});