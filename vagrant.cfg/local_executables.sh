#!/usr/bin/env bash

echo "############################"
echo "Setting up User executables."
echo "############################"
mkdir -p ~/bin/
cp /vagrant/vagrant.cfg/serve_jekyll ~/bin/
chmod +x ~/bin/serve_jekyll

