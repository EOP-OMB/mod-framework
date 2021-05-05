# mod-framework

The ModFramework is a suite of building blocks to assist development of applications within OMB's Management and Operations Division (MOD).  The Framework is loosely based on ASP.NET Boilerplate (ABP).  

The Mod.Framework.Server projects provide ASP.NET server side tools for creating a RESTful Web API interface with a SQL Server backend.  The Server side code is currently written in .NET core 3.1 and .NET Standard 2.

Client utilities include mod-angular-libraries which provide common layout, menu structure, and authentication for applications.  The angular libraries utilize Angular 11, although, an old dist exists for Angular 9 development as well.

# Installing the MOD Framework
The MOD Framework is similar to an npm package, it just doesn't reside on npm.  In order to install it type the following from your application root.
    
## Add the Framework repository as a Sub Module

Keeping a local copy of the Framework within your repository allows the build server to pull the repo and build against it.  

To add the Submodule, use a relative (URL) path to the Framework from your repository.  Because all our repositories are siblings within the EOP-OMB projects a single '..' should do the trick.  

    git submodule add ../mod-framework

**Note**: This submodule is also what you should reference in your Server project.

You may make changes to the submodule and push/pull it as you would any other repo.  Here's a decent article that talks a bit about sub modules:  https://www.vogella.com/tutorials/GitSubmodules/article.html#:~:text=Pulling%20with%20submodules,in%20the%20git%20pull%20command%20.

## Install the Framework to your Project

You'll need to ensure that the mod-framework repository is located somewhere accessible to the project you're integrating.  

    npm install ../../mod-framework/Client/mod-angular-libraries/dist/mod-framework

Or, replace all the `.../../`'s with a relative path to your repository root where the Framework project resides.

The npm install command will alert you that several peer dependencies are missing.  You'll need to npm install those as well.

One dependency is @angular/material 

The best way to install that is
    
    ng add @angular/material 

This will do a bit more than `npm install`

The remaining dependencies you can install by typing 
    
    npm install <package>

## Adding the Auth Certificates

Create a folder under your root app folder (same level as src) called Certificates and copy the localhost.login.omb.gov.key and localhost.login.omb.gov.pem files there.  

## Configuring angular.json
You'll need to update your angular.json file.

### projects -> <project name> -> architect -> serve -> options with the following:

Need to update host and add certificates to allow for ssl auth against the web api project.  
    
    "options": {
        "browserTarget": "<app-specific",
        "ssl": true,
        "sslKey": "Certificates/host-name.key",
        "sslCert": "Certificates/host-name.pem",
        "host": "host-name"
    },

### projects -> <project name> -> architect -> build -> options

This will help keep your linked module (mod-framework) from throwing injection errors:
    
    "preserveSymlinks": true,
    

## Configuring tsconfig.json

Adding the following option to compiler options allows the import of a json like I'm doing in the example app for the menu config.

    "compilerOptions": {
        ...
        "resolveJsonModule": true,
        ...
    
