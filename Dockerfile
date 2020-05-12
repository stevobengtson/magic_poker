FROM ubuntu:latest

SHELL ["/bin/bash", "-c"] 

ENV DEBIAN_FRONTEND=noninteractive

# Get the basics
RUN apt-get update -y && \
    apt-get install -y curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt1-dev \
     libcurl4-openssl-dev software-properties-common libffi-dev \
     libgdbm-dev libncurses5-dev automake libtool bison libffi-dev vim git && \
    ln -fs /usr/share/zoneinfo/America/Vancouver /etc/localtime && \
    dpkg-reconfigure --frontend noninteractive tzdata

# Install Node
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g @angular/cli

# Install Ruby 2.7.1 Via RVM
RUN gpg --keyserver hkp://ipv4.pool.sks-keyservers.net:80 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB && \
    curl -sSL https://get.rvm.io | bash -s stable && \
    source /etc/profile.d/rvm.sh && \
    rvm install 2.7.1 && \
    rvm use 2.7.1 --default && \
    gem install rails -v 6.0.2.2 && \
    echo "/etc/profile.d/rvm.sh" >> ~/.bashrc

# Install Postgres SQL Server
RUN curl -sSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | tee  /etc/apt/sources.list.d/pgdg.list && \
    apt-get update && \
    apt-get install -y postgresql-12 libpq-dev postgresql-client-12

EXPOSE 4200
EXPOSE 3000
EXPOSE 5432

ENTRYPOINT service postgresql restart && bash