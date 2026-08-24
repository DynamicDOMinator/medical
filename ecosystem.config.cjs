module.exports = {
  apps: [
    {
      name: 'medical-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/home/tcathewoodlands/htdocs/tcathewoodlands.com/medical',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        SMTP_HOST: 'smtp.hostinger.com',
        SMTP_PORT: 465,
        SMTP_SECURE: 'true',
        SMTP_USER: 'almahmoud@tcathewoodlands.com',
        SMTP_PASS: 'B7j;0oc!s$bm',
        NOTIFICATION_EMAIL: 'almahmoud@tcathewoodlands.com'
      }
    }
  ]
};
