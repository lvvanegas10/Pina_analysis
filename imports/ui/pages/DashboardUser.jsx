import * as React from 'react';

class DashboardUser extends React.Component {
    componentDidMount(){
        var divElement = document.getElementById('viz1544493238500');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '1000px'; vizElement.style.height = '827px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
    
    render() {
        return (
            <div className="dashboard-container">
                <div className='tableauPlaceholder' id='viz1544493238500'>
                    <noscript>
                        <a href='#'>
                            <img className="img-viz" alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pi&#47;Pina_user&#47;User&#47;1_rss.png' />
                        </a>
                    </noscript>
                    <object className='tableauViz' >
                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                        <param name='embed_code_version' value='3' />
                        <param name='site_root' value='' />
                        <param name='name' value='Pina_user&#47;User' />
                        <param name='tabs' value='no' />
                        <param name='toolbar' value='yes' />
                        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pi&#47;Pina_user&#47;User&#47;1.png' />
                        <param name='animate_transition' value='yes' />
                        <param name='display_static_image' value='yes' />
                        <param name='display_spinner' value='yes' />
                        <param name='display_overlay' value='yes' />
                        <param name='display_count' value='yes' />
                    </object>

                </div>
            </div>
        );
    }
}

export default DashboardUser;