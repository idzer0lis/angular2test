/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './home.component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../login/login.component.ngfactory';
import * as import3 from '../../../../../src/app/services/api.service';
import * as import4 from '@angular/http';
import * as import5 from '../../../../../src/app/components/login/login.component';
import * as import6 from '@angular/forms';
import * as import7 from '@angular/flex-layout/flexbox/api/layout';
import * as import8 from '@angular/flex-layout/media-query/media-monitor';
import * as import9 from '@angular/flex-layout/flexbox/api/class';
import * as import10 from '@angular/flex-layout/flexbox/api/flex';
import * as import11 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as import12 from '@angular/flex-layout/flexbox/api/flex-align';
import * as import13 from '@angular/flex-layout/flexbox/api/show-hide';
import * as import14 from '../../../../../src/app/components/home/home.component';
var styles_HomeComponent = [import0.styles];
export var RenderType_HomeComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_HomeComponent,
    data: {}
});
export function View_HomeComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n  Home Works!\n'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 2, 'my-login', [], null, null, null, import2.View_LoginComponent_0, import2.RenderType_LoginComponent)),
        import1.ɵprd(512, null, import3.ApiService, import3.ApiService, [import4.Http]),
        import1.ɵdid(114688, null, 0, import5.LoginComponent, [
            import6.FormBuilder,
            import3.ApiService
        ], null, null),
        (l()(), import1.ɵted(null, ['\n\n\n'])),
        (l()(), import1.ɵeld(0, null, null, 18, 'div', [
            [
                'class',
                'container'
            ],
            [
                'fxLayout.md',
                'row wrap'
            ],
            [
                'fxLayout.sm',
                'column'
            ],
            [
                'style',
                'border: 1px solid black;'
            ]
        ], null, null, null, null, null)),
        import1.ɵdid(737280, null, 0, import7.LayoutDirective, [
            import8.MediaMonitor,
            import1.ElementRef,
            import1.Renderer2
        ], {
            layoutSm: [
                0,
                'layoutSm'
            ],
            layoutMd: [
                1,
                'layoutMd'
            ]
        }, null),
        import1.ɵdid(933888, null, 0, import9.ClassDirective, [
            import8.MediaMonitor,
            import1.IterableDiffers,
            import1.KeyValueDiffers,
            import1.ElementRef,
            import1.Renderer,
            import1.Renderer2
        ], { classBase: [
                0,
                'classBase'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'div', [
            [
                'fxFlex',
                'auto'
            ],
            [
                'fxFlexAlign.sm',
                'center center'
            ],
            [
                'style',
                'border: 1px dotted red;'
            ]
        ], null, null, null, null, null)),
        import1.ɵdid(737280, null, 0, import10.FlexDirective, [
            import8.MediaMonitor,
            import1.ElementRef,
            import1.Renderer2,
            [
                3,
                import7.LayoutDirective
            ],
            [
                3,
                import11.LayoutWrapDirective
            ]
        ], { flex: [
                0,
                'flex'
            ]
        }, null),
        import1.ɵdid(737280, null, 0, import12.FlexAlignDirective, [
            import8.MediaMonitor,
            import1.ElementRef,
            import1.Renderer2
        ], { alignSm: [
                0,
                'alignSm'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['This displayed left on large-medium devices, and will be displayed centered on small ones'])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'div', [
            [
                'fxFlex',
                '66'
            ],
            [
                'fxHide.sm',
                'true'
            ],
            [
                'style',
                'border: 1px dotted green;'
            ]
        ], null, null, null, null, null)),
        import1.ɵdid(737280, null, 0, import10.FlexDirective, [
            import8.MediaMonitor,
            import1.ElementRef,
            import1.Renderer2,
            [
                3,
                import7.LayoutDirective
            ],
            [
                3,
                import11.LayoutWrapDirective
            ]
        ], { flex: [
                0,
                'flex'
            ]
        }, null),
        import1.ɵdid(737280, null, 0, import13.ShowHideDirective, [
            import8.MediaMonitor,
            [
                8,
                null
            ],
            import1.ElementRef,
            import1.Renderer2
        ], { hideSm: [
                0,
                'hideSm'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['This div is always 66% on large-medium devices, it will be hidden on small devices'])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'div', [
            [
                'fxFlex',
                'auto'
            ],
            [
                'fxFlexAlign.sm',
                'center center'
            ],
            [
                'style',
                'border: 1px dotted blue;'
            ]
        ], null, null, null, null, null)),
        import1.ɵdid(737280, null, 0, import10.FlexDirective, [
            import8.MediaMonitor,
            import1.ElementRef,
            import1.Renderer2,
            [
                3,
                import7.LayoutDirective
            ],
            [
                3,
                import11.LayoutWrapDirective
            ]
        ], { flex: [
                0,
                'flex'
            ]
        }, null),
        import1.ɵdid(737280, null, 0, import12.FlexAlignDirective, [
            import8.MediaMonitor,
            import1.ElementRef,
            import1.Renderer2
        ], { alignSm: [
                0,
                'alignSm'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['This div is place right on large-medium devices, it will be displayed centered on small ones'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n\n']))
    ], function (ck, v) {
        ck(v, 5, 0);
        var currVal_0 = 'column';
        var currVal_1 = 'row wrap';
        ck(v, 8, 0, currVal_0, currVal_1);
        var currVal_2 = 'container';
        ck(v, 9, 0, currVal_2);
        var currVal_3 = 'auto';
        ck(v, 12, 0, currVal_3);
        var currVal_4 = 'center center';
        ck(v, 13, 0, currVal_4);
        var currVal_5 = '66';
        ck(v, 17, 0, currVal_5);
        var currVal_6 = 'true';
        ck(v, 18, 0, currVal_6);
        var currVal_7 = 'auto';
        ck(v, 22, 0, currVal_7);
        var currVal_8 = 'center center';
        ck(v, 23, 0, currVal_8);
    }, null);
}
function View_HomeComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'my-home', [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)),
        import1.ɵdid(114688, null, 0, import14.HomeComponent, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var HomeComponentNgFactory = import1.ɵccf('my-home', import14.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
//# sourceMappingURL=home.component.ngfactory.js.map