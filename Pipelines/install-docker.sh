#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker not found, installing..."
  
    # Detect the OS
    OS_NAME=$(lsb_release -is)
  
    if [[ "$OS_NAME" == "Debian" ]]; then
        echo "Detected Debian OS, proceeding with Docker installation for Debian."
    
        sudo apt-get update
        sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    
        # Add Docker's official GPG key for Debian
        curl -fsSL https://download.docker.com/linux/debian/gpg | sudo tee /etc/apt/trusted.gpg.d/docker.asc
    
        # Set up the stable Docker repository for Debian
        echo "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
        sudo apt-get update
    
        # Install Docker and auto-accept to keep existing configuration files
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io --option=Dpkg::Options::="--force-confold"
  
    elif [[ "$OS_NAME" == "Ubuntu" ]]; then
        echo "Detected Ubuntu OS, proceeding with Docker installation for Ubuntu."
    
        apt-get update
        apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    
        # Add Docker's official GPG key for Ubuntu
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    
        # Set up the stable Docker repository for Ubuntu
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
        apt-get update
    
        # Install Docker and auto-accept to keep existing configuration files
        apt-get install -y docker-ce docker-ce-cli containerd.io --option=Dpkg::Options::="--force-confold"
  
    else
        echo "Unsupported OS. This script supports Debian and Ubuntu only."
        exit 1
    fi
  
    # Add current user to docker group
    usermod -aG docker $(whoami)
  
    # Apply group change without relogin
    newgrp docker <<EONG
docker --version
EONG
  
    echo "Docker installation completed!"

else
  echo "Docker is already installed"

fi

# Start and enable Docker
echo "Starting Docker service..."
systemctl start docker
systemctl enable docker
