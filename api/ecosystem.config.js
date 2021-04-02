module.exports = {
  apps: [
    {
      name: 'teammeet_development',
      script: 'src/app.ts',
      node_args: '-r dotenv/config',
      max_memory_restart: '256M',
      autorestart: true,
      env: {
        PORT: 4000,
        NODE_ENV: 'development'
      }
    }
    // ,
    // {
    //   name: 'teammeet_productioin',
    //   script: 'build/app.js',
    //   node_args: '-r dotenv/config',
    //   max_memory_restart: '256M',
    //   autorestart: true,
    //   env: {
    //     NODE_ENV: 'production'
    //   }
    // }
  ]
}
