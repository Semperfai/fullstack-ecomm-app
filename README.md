
## App Setup (localhost)

git clone https://github.com/Semperfai/fullstack-ecomm-app.git

cp .env.example .env

npm i

npx prisma generate

npm run dev
```

You'll have to setup a Supabase account & Stripe account, then add all of the details in to your .env file.

Once you've connected your application to Supabase. You'll also need to setup the Auth Providers:
    Google [Google](https://cloud.google.com)
    Github [Github](https://github.com/settings/developers)
    
    https://supabase.com/docs/guides/auth/social-login/auth-google
    https://supabase.com/docs/guides/auth/social-login/auth-github
    
Now run the command to migrate your database tables and run your seed file.
    
```
npx prisma migrate dev --name init


# Application Images

<img width="1439" src="https://res.cloudinary.com/dnenvhtxp/image/upload/v1690732027/screenshots/Screenshot_rtypv8.png">
<img width="1439" src="https://res.cloudinary.com/dnenvhtxp/image/upload/v1690732023/screenshots/Screenshot_1_t7bqzp.png">
<img width="1439" src="https://res.cloudinary.com/dnenvhtxp/image/upload/v1690732327/screenshots/Screenshot_3_ourxvq.png">
