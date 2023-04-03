#!/usr/bin/env bash

echo "############################"
echo "Installing Base/System Tools"
echo "############################"
apt-get update
apt-get install -y curl gcc gnupg gpg vim autoconf automake bison libffi-dev libgdbm-dev libncurses5-dev libsqlite3-dev libtool libyaml-dev pkg-config sqlite3 zlib1g-dev libgmp-dev libreadline-dev
