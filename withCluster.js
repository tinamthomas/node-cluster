const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const express = require('express');
const server = require('./server');

if (cluster.isMaster) {
  master();
} else {
  server();
}

function master() {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', function(deadWorker, code, signal) {
    cluster.fork();
    console.log("Restarted worker");
  });
 }
