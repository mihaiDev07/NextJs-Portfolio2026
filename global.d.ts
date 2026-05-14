declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.styl";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";
declare module "*.svg" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string;
  }>;
  export default content;
}
