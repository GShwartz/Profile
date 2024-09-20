
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
        docker run -p <your-port>:80 <your-app-name>
   ```

2. **Access** 
    <br />
    Navigate to ```http://localhost:port ``` in your browser.

---
### Docker-Compose
* You can change port **8080** to a port of your choosing.

1. **Build & Run**
    ```bash
        docker-compose up -d --build
    ```