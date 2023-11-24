# boilerplate-react-client

This is a monorepo that utilizes Lerna for package management, encompassing a set of essential projects for development:

## **Included Projects**

### **1. [UI Kit](https://chat.openai.com/c/packages/ui-kit)**

A comprehensive set of User Interface (UI) components based on the boilerplate-ui-kit. These components are highly reusable and customizable to accelerate the development of consistent interfaces.

### **2. [Design Tokens](https://chat.openai.com/c/packages/design-tokens)**

Design tokens generated with Style Dictionary. These tokens form the foundation for visual consistency throughout the project, allowing for easy updating and maintenance of styles.

### **3. [Client Next.js](https://chat.openai.com/c/packages/client-next)**

A Next.js client application using TypeScript. This package includes an initial structure for developing client-side pages and components, seamlessly integrating with the UI Kit and utilizing Design Tokens.

## **Getting Started**

1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/monorepo-lerna.git
```
    
2. **Navigate to the Project Directory:** 
```bash
cd monorepo-lerna
```
    
3. **Install Dependencies:**
```bash
npm install
```
    
4. **Use Lerna to Install Package Dependencies:**  
```bash
npx lerna bootstrap
```
    
5. **Run the Next.js Project:**
```bash
cd packages/client-next
npm run dev
```
    
The Next.js client application will be available at [http://localhost:3000](http://localhost:3000/).
    

## **Development**

- **UI Kit and Design Tokens:** Develop and update UI Kit components and design tokens. Use Storybook to view components in isolation and ensure visual consistency.
- **Client Next.js:** Build client-side pages and components using TypeScript. Integrate the UI Kit and Design Tokens to ensure a cohesive user experience.

