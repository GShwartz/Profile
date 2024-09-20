---
## Deployment with Dockerfile

This application can be deployed using Docker by following these steps:

1. **Clone the repository**:
   ```bash
        git clone https://github.com/GShwartz/Profile.git
        cd Profile
   ```

2. **Run**
   ```bash
        docker build -t <your-app-name> .
        docker run -p <your-port>:80 <your-app-name>
   ```

3. **Access** 
    <br />
    Navigate to http://localhost:<your-port> in your browser.

<br />
---