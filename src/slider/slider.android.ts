import { rippleColorProperty } from '@nativescript-community/ui-material-core';
import { Color, colorProperty } from '@nativescript/core';
import { thumbColorProperty, trackBackgroundColorProperty, trackFillColorProperty } from './cssproperties';
import { SliderBase } from './slider-common';

export class Slider extends SliderBase {
    nativeViewProtected: android.widget.SeekBar;

    [colorProperty.setNative](color: Color) {
        super[colorProperty.setNative](color);
        if (!this.trackBackgroundColor) {
            this.trackBackgroundColor = color;
        }
        if (!this.trackFillColor) {
            this.trackFillColor = color;
        }
        if (!this.thumbColor) {
            this.thumbColor = color;
        } else {
            // trackFillColor overrides also the thumbColor
            this[thumbColorProperty.setNative](this.thumbColor);
        }
    }
    [rippleColorProperty.setNative](color: Color) {
        // TODO: for now it is impossible to change the ripple color on android for now
    }
    [thumbColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setThumbTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
        if (android.os.Build.VERSION.SDK_INT >= 24) {
            this.nativeViewProtected.setTickMarkTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
        }
    }
    [trackBackgroundColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setProgressBackgroundTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
    }
    [trackFillColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setProgressTintList(color ? android.content.res.ColorStateList.valueOf(color.android) : null);
    }

    // [elevationProperty.setNative](value: number) {
    //     this.nativeViewProtected.thumbElevation = value;
    // }
}
