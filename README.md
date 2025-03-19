---

# **Terraform AWS Lambda Deployment**

This repository contains Terraform configuration to deploy an AWS Lambda function using Node.js. It sets up the necessary IAM role, packages the Lambda code, and deploys the function with environment variables.

---

## **Project Overview**

The Terraform configuration in this project:

1. **Creates an IAM Role**: Grants Lambda permissions to execute and write logs.
2. **Packages Lambda Code**: Zips the `lambda.js` function for deployment.
3. **Deploys Lambda Function**: Sets up the Lambda function with Node.js 18.x runtime and environment variables.

---

## **Usage**

### **Prerequisites**

- **Terraform** >= 1.2.0  
- **AWS CLI** configured with appropriate credentials  
- AWS IAM permissions to create Lambda functions and IAM roles  
- Node.js runtime (Node.js 18.x)

---

### **Steps to Deploy**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Nombulelo-Khumalo/terraform-lambda.git
   cd terraform-lambda
   ```

2. **Prepare Lambda Code**:  
   Create a `lambda.js` file with your Lambda function code in the project directory.

3. **Initialize Terraform**:

   ```bash
   terraform init
   ```

4. **Review Terraform Plan**:

   ```bash
   terraform plan
   ```

5. **Apply Terraform Configuration**:

   ```bash
   terraform apply
   ```
   Confirm with `yes` when prompted.

6. **Verify Lambda Deployment**:
   - Log in to the AWS Management Console.
   - Navigate to **AWS Lambda** and confirm the function is deployed.

---

### **Lambda Function Details**

- **Function Name**: `lambda_sample`  
- **Runtime**: `nodejs18.x`  
- **Handler**: `index.test`  
- **Environment Variable**: `foo = bar`

---

## **Cleaning Up**

To avoid unnecessary charges, destroy the Terraform-managed resources when you're done:

```bash
terraform destroy
```

Confirm with `yes` when prompted.

---

## **License**

This project is licensed under the **MIT License**.  

---

## **About**

Created by Nombulelo Khumalo as a Terraform AWS Lambda demo project.

---

