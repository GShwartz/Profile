
# Deployment 
**Clone the repository**:
   ```bash
        git clone https://github.com/GShwartz/Profile.git
        cd Profile
   ```

---
### Dockerfile
1. **Build & Run**
   ```bash
        docker build -t <your-app-name> .
        docker run -d -p <your-port>:80 --restart unless-stopped <your-app-name>
   ```

2. **Access** 
    <br />
    Navigate to ```http://localhost:<port-number> ``` in your browser.

---
### Docker-Compose
* You can change port **8080** to a port of your choosing. <br />
Example:
    ```bash
        sed -i 's/8080:80/9090:80/' docker-compose.yml
    ```
    This will change the port to **9090** so the navigation will look like this: ```http://localhost:9090```

1. **Build & Run**
    ```bash
        docker-compose up -d --build
    ```

---
### Kubernetes
1. **Deploy**
    ```bash
        kubectl apply -f k8s-manifest.yml
    ```