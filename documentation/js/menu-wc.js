'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link"> Ma documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AModule.html" data-type="entity-link" >AModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AModule-cdfa681b61c26fbef58f1145203d33417771f6133a5f7aed159b33c532a9264b8d903209fc356a8a8612c96a2e108d99030e64aa6e5e3654ae1eb67325bec559"' : 'data-target="#xs-components-links-module-AModule-cdfa681b61c26fbef58f1145203d33417771f6133a5f7aed159b33c532a9264b8d903209fc356a8a8612c96a2e108d99030e64aa6e5e3654ae1eb67325bec559"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AModule-cdfa681b61c26fbef58f1145203d33417771f6133a5f7aed159b33c532a9264b8d903209fc356a8a8612c96a2e108d99030e64aa6e5e3654ae1eb67325bec559"' :
                                            'id="xs-components-links-module-AModule-cdfa681b61c26fbef58f1145203d33417771f6133a5f7aed159b33c532a9264b8d903209fc356a8a8612c96a2e108d99030e64aa6e5e3654ae1eb67325bec559"' }>
                                            <li class="link">
                                                <a href="components/A1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >A1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/A2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >A2Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-28cd3500604062d1c1be44656395b3a8295357d87e1bfc8ec44bb8e67e597ac7ec2a0c589a41f68738211fb4f68a17849014118c61bf5f845c0a407da6c1914a"' : 'data-target="#xs-components-links-module-AppModule-28cd3500604062d1c1be44656395b3a8295357d87e1bfc8ec44bb8e67e597ac7ec2a0c589a41f68738211fb4f68a17849014118c61bf5f845c0a407da6c1914a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-28cd3500604062d1c1be44656395b3a8295357d87e1bfc8ec44bb8e67e597ac7ec2a0c589a41f68738211fb4f68a17849014118c61bf5f845c0a407da6c1914a"' :
                                            'id="xs-components-links-module-AppModule-28cd3500604062d1c1be44656395b3a8295357d87e1bfc8ec44bb8e67e597ac7ec2a0c589a41f68738211fb4f68a17849014118c61bf5f845c0a407da6c1914a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreweryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreweryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildrenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BModule.html" data-type="entity-link" >BModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BModule-2ce4d8d523e1c5d92fe0b291c1d6792bcfa9f5cc0b24f870b298fa97b64592352ed5bc88b4542c77cb849668882e9a150432952dd9a50757a883ce86852a92f3"' : 'data-target="#xs-components-links-module-BModule-2ce4d8d523e1c5d92fe0b291c1d6792bcfa9f5cc0b24f870b298fa97b64592352ed5bc88b4542c77cb849668882e9a150432952dd9a50757a883ce86852a92f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BModule-2ce4d8d523e1c5d92fe0b291c1d6792bcfa9f5cc0b24f870b298fa97b64592352ed5bc88b4542c77cb849668882e9a150432952dd9a50757a883ce86852a92f3"' :
                                            'id="xs-components-links-module-BModule-2ce4d8d523e1c5d92fe0b291c1d6792bcfa9f5cc0b24f870b298fa97b64592352ed5bc88b4542c77cb849668882e9a150432952dd9a50757a883ce86852a92f3"' }>
                                            <li class="link">
                                                <a href="components/B1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >B1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/B2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >B2Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-5bd926fd05249a3ccd29e50a3e09b4add1ddb520ce02afce806b12bd5d3db3f3aeef6bae593318936d1c5d3f41f0a5e66d30b3316ec3d1411943cc51547ebd34"' : 'data-target="#xs-components-links-module-SharedModule-5bd926fd05249a3ccd29e50a3e09b4add1ddb520ce02afce806b12bd5d3db3f3aeef6bae593318936d1c5d3f41f0a5e66d30b3316ec3d1411943cc51547ebd34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-5bd926fd05249a3ccd29e50a3e09b4add1ddb520ce02afce806b12bd5d3db3f3aeef6bae593318936d1c5d3f41f0a5e66d30b3316ec3d1411943cc51547ebd34"' :
                                            'id="xs-components-links-module-SharedModule-5bd926fd05249a3ccd29e50a3e09b4add1ddb520ce02afce806b12bd5d3db3f3aeef6bae593318936d1c5d3f41f0a5e66d30b3316ec3d1411943cc51547ebd34"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BreweryService.html" data-type="entity-link" >BreweryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodService.html" data-type="entity-link" >FoodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NameService.html" data-type="entity-link" >NameService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/BreweryInterceptor.html" data-type="entity-link" >BreweryInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TestInterceptor.html" data-type="entity-link" >TestInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});