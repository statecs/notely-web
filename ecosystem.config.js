module.exports = {
  apps: [{
    name: 'notely-app',
    script: 'npx',
    args: ['serve', '-s', 'build', '-l', '5090', '--single'],
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
    }
  }]
};