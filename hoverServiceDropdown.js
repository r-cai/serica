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
        document.getElementById('service-dropdown-menu').addEventListener('mouseleave', (e) => {
            if (!serviceDropdownMenu.contains(e.relatedTarget)){
                serviceDropdownMenu.style['border'] = 'none';
                serviceDropdownMenu.style['max-height'] = '0px';
                document.getElementById('services-bridge').style['height'] = '0px';
                serviceDropdownMenu.style['padding'] = '0px 15%';
            }
        });