'use client';

import * as amplitude from '@amplitude/analytics-browser';

function initAmplitude() {
  if (typeof window !== 'undefined') {
    amplitude.init('bf52b8d419437271c3441137f6cf4dae', {
      autocapture: true,
    });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
