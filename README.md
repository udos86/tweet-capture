# Media Capture

## API

`/api/v1/health`
`http://localhost:3000/api/v1/health`

`/api/v1/tweets/{tweetId}`
`http://localhost:3000/api/v1/tweets/1338546514646487045`

`/api/v1/yt/{videoId}`
`http://localhost:3000/api/v1/yt/KUMa3Jj-5eM`

## AWS

### **ECR**
1. Create public repository
2. Authenticate Docker client to registry: 
`aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/g2x5x7p9`
3. Tag Docker image: `docker tag tweet-capture:latest public.ecr.aws/g2x5x7p9/tweet-capture:latest`
4. Push image to registry: `docker push public.ecr.aws/g2x5x7p9/tweet-capture:latest`

### **ECS**

1. Create "EC2 Linux + Networking" Cluster: 

* Instance Type: `t2.micro`
* VPC: Select generated list entry
* Subnet: Select generated first list entry
* Auto assign public IP: `enabled`
* Security Group: default
* SSH Keys

2. Create Task

* Compatibility: EC2
* Task Memory: 100
* Task CPU: 1vCPU
* Add Container
 * Image URI


### **EC2**

Inspect Container:

1 .SSH via `ssh -i "<MY_KEY_PAIR>.pem" ec2-user@<PUBLIC_IPV4_DNS>`
2. `docker logs --follow <CONTAINER_ID>`