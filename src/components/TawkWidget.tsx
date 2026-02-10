'use client';

import Script from 'next/script';

export default function TawkWidget() {
    return (
        <Script
            id="tawk-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    var Tawk_API = Tawk_API || {};
                    var Tawk_LoadStart = new Date();
                    (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/614338afd326717cb681cadc/1ffn9aukg';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                    })();
                `
            }}
        />
    );
}
