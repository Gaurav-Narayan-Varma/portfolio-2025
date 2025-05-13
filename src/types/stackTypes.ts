export type Tool = {
    name: string;
    tag: string;
    image: string;
    link: string;
  };
  
  export type ToolCategory = {
    name: string;
    tools: Tool[];
  };