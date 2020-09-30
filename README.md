# TMK

The application is currently insecure and probably will never be made fully secure as an inherent limitation of Typescript/NodeJS programming. Most off the vulnerabilities affect the server if the application was to be deployed on a web server. Compiling the mobile app and running it locally should introduce few vulnerabilities by merit of the security of the Android web browser and lack of need to communicate with other computers. Regardless, any vulnerability is a severe vulnerability, so I have provided a text file containing all of the present vulnerabilities in this application with the hope that potential users will consider the introduction of these discrepancies before adopting this code. 

I assume that (i.e., don't quote me) many of the vulnerabilities introduced by third party libraries will not effect a user visiting the demonstration hosted on GitHub pages. Realistically, I believe that I will be able to mitigate the grand majority of these vulnerabilities if I release the application in production mode and host it with a framework besides the provided NodeJS server side code. Whatever proprietary code used to host GitHub pages will hopefully account for any additional permissions afforded to the user by the aforementioned vulnerabilities. 

On a more positive note, I have spent a good deal of time programming this application, and although it is in its early stages, I hope that it may be of use for studying Japanese or another language. 
