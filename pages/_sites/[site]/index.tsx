import { GetStaticProps } from "next";
import React from "react";

export default function Index({ project }: { project: { data: string } }) {
  return <h1>{project.data}</h1>;
}

export async function getStaticPaths() {
    const paths = [{ params: { site: "test" } }, { params: { site: "test2" } }];
  
    return {
      paths: paths,
      fallback: "blocking",
    };
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const data = [
      { domain: "test", data: "My first test project" },
      { domain: "test2", data: "My second test project" },
    ];
  console.log(context.params)
    const project = data.find((p) => p.domain === context.params?.site);
  
    return {
      props: { project },
    };
  };