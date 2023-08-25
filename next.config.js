/** @type {import('next').NextConfig} */
const nextConfig ={ 
    distDir:'build',
    images:{
        domains:['roar.media'],
    },
    async headers(){
        return[

            {
                source:'/:path*', headers:[
                    {
                        key:'X-Frame-Options',
                        value:"DENY"
                    }
                ]
            }
        ]
    }


    
}
module.exports = nextConfig
