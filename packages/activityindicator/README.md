[![npm](https://img.shields.io/npm/v/nativescript-material-activityindicator.svg)](https://www.npmjs.com/package/nativescript-material-activityindicator)
[![npm](https://img.shields.io/npm/dt/nativescript-material-activityindicator.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-material-activityindicator)
[![GitHub forks](https://img.shields.io/github/forks/Akylas/nativescript-material-components.svg)](https://github.com/Akylas/nativescript-material-components/network)
[![GitHub stars](https://img.shields.io/github/stars/Akylas/nativescript-material-components.svg)](https://github.com/Akylas/nativescript-material-components/stargazers)

## Installation

If using ```@nativescript``` :
* `tns plugin add nativescript-material-activityindicator`

If using ```tns-core-modules```
* `tns plugin add nativescript-material-activityindicator@2.5.4`

Be sure to run a new build after adding plugins to avoid any issues.

---

##### [Material Design Spec](https://material.io/design/components/progress-indicators.html#circular-progress-indicators)

### Usage


## Plain NativeScript

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:mda="@nativescript-community/ui-material-activityindicator"` on the Page element_

### XML

```XML
<Page xmlns:mda="@nativescript-community/ui-material-activityindicator">
    <StackLayout horizontalAlignment="center">
        <mda:ActivityIndicator busy="true"/>
    </StackLayout>
</Page>
```

### CSS

```CSS
mdcactivityindicator {
    color: #fff;
}
```

## NativeScript + Angular

```typescript
import { NativeScriptMaterialActivityIndicatorModule } from "@nativescript-community/ui-material-activityindicator/angular";

@NgModule({
    imports: [
        NativeScriptMaterialActivityIndicatorModule,
        ...
    ],
    ...
})
```

```html
<MDActivityIndicator busy="true"></MDActivityIndicator>
```

## NativeScript + Vue

```javascript
import Vue from 'nativescript-vue';
import ActivityIndicatorPlugin from '@nativescript-community/ui-material-activityindicator/vue';

Vue.use(ActivityIndicatorPlugin);
```

```html
<MDActivityIndicator busy="true"/>
```

## Attributes

Inherite from Nativescript [Activity Indicator](https://docs.nativescript.org/ui/ns-ui-widgets/activity-indicator) so it already has all the same attributes
