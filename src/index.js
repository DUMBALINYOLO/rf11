import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ForceGraph2D from "react-force-graph-2d";
import "./styles.css";
import { withResizeDetector } from "react-resize-detector";

const data = {
  nodes: [
    {
      id: "operationalModel-Group",
      name: "OpModel-Ind",
      color: "#ff5638"
    },
    {
      id: "operationalModel-Individual",
      name: "OpModel-Grp",
      color: "#ff5638"
    },
    {
      id: "Source",
      name: "Source",
      color: "#07eb25"
    },
    {
      id: "Domain",
      name: "Accounts",
      color: "#f5ff38"
    },
    {
      id: "TBL-AVSHS",
      name: "Table-AVSHS",
      color: "#07ebc1"
    },
    {
      id: "TBL-BPXN",
      name: "Table-BPXN",
      color: "#07ebc1"
    },
    {
      id: "TBL-UIIF",
      name: "Table-UIIF",
      color: "#07ebc1"
    },
    {
      id: "TBL-EMDDS",
      name: "Table-EMDDS",
      color: "#07ebc1"
    },
    {
      id: "TBL-UPDM",
      name: "Table-UPDM",
      color: "#07ebc1"
    },
    {
      id: "TBL-NSKM",
      name: "Table-NSKM",
      color: "#07ebc1"
    },
    {
      id: "TBL-VZQK",
      name: "Table-VZQK",
      color: "#07ebc1"
    },
    {
      id: "TBL-GBOV",
      name: "Table-GBOV",
      color: "#07ebc1"
    },
    {
      id: "TBL-WEMD",
      name: "Table-WEMD",
      color: "#07ebc1"
    },
    {
      id: "TBL-OVBC",
      name: "Table-OVBC",
      color: "#07ebc1"
    },
    {
      id: "TBL-OEJL",
      name: "Table-OEJL",
      color: "#07ebc1"
    },
    {
      id: "TBL-NSSJ",
      name: "Table-NSSJ",
      color: "#07ebc1"
    },
    {
      id: "TBL-TWMX",
      name: "Table-TWMX",
      color: "#07ebc1"
    },
    {
      id: "TBL-IZAN",
      name: "Table-IZAN",
      color: "#07ebc1"
    },
    {
      id: "TBL-BZKB",
      name: "Table-BZKB",
      color: "#07ebc1"
    },
    {
      id: "TBL-YZFC",
      name: "Table-YZFC",
      color: "#07ebc1"
    },
    {
      id: "TBL-JNFV",
      name: "Table-JNFV",
      color: "#07ebc1"
    },
    {
      id: "TBL-DKVS",
      name: "Table-DKVS",
      color: "#07ebc1"
    }
  ],

  links: [
    {
      id: "opModelGroup-To-Source",
      source: "operationalModel-Group",
      target: "Source",
      name: "Operating Model Group to Source"
    },
    {
      id: "opModelInd-To-Source",
      source: "operationalModel-Individual",
      target: "Source",
      name: "operational Model Individual to Source"
    },
    {
      id: "Source-To-Domain",
      source: "Source",
      target: "Domain",
      name: "Source to Domain"
    },
    {
      id: "domainToTable_1",
      source: "Domain",
      target: "TBL-AVSHS",
      name: "Domain to Table TBL-AVSHS"
    },
    {
      id: "domainToTable_2",
      source: "Domain",
      target: "TBL-BPXN",
      name: "Domain to Table TBL-BPXN"
    },
    {
      id: "domainToTable_3",
      source: "Domain",
      target: "TBL-UIIF",
      name: "Domain to Table TBL-UIIF"
    },
    {
      id: "domainToTable_4",
      source: "Domain",
      target: "TBL-EMDDS",
      name: "Domain to Table TBL-EMDDS"
    },
    {
      id: "domainToTable_5",
      source: "Domain",
      target: "TBL-UPDM",
      name: "Domain to Table TBL-UPDM"
    },
    {
      id: "domainToTable_6",
      source: "Domain",
      target: "TBL-NSKM",
      name: "Domain to Table TBL-NSKM"
    },
    {
      id: "domainToTable_7",
      source: "Domain",
      target: "TBL-VZQK",
      name: "Domain to Table TBL-VZQK"
    },
    {
      id: "domainToTable_8",
      source: "Domain",
      target: "TBL-GBOV",
      name: "Domain to Table TBL-GBOV"
    },
    {
      id: "domainToTable_9",
      source: "Domain",
      target: "TBL-WEMD",
      name: "Domain to Table TBL-WEMD"
    },
    {
      id: "domainToTable_10",
      source: "Domain",
      target: "TBL-OVBC",
      name: "Domain to Table TBL-OVBC"
    },
    {
      id: "domainToTable_11",
      source: "Domain",
      target: "TBL-OEJL",
      name: "Domain to Table TBL-OEJL"
    },
    {
      id: "domainToTable_12",
      source: "Domain",
      target: "TBL-NSSJ",
      name: "Domain to Table TBL-NSSJ"
    },
    {
      id: "domainToTable_13",
      source: "Domain",
      target: "TBL-TWMX",
      name: "Domain to Table TBL-TWMX"
    },
    {
      id: "domainToTable_14",
      source: "Domain",
      target: "TBL-IZAN",
      name: "Domain to Table TBL-IZAN"
    },
    {
      id: "domainToTable_15",
      source: "Domain",
      target: "TBL-BZKB",
      name: "Domain to Table TBL-BZKB"
    },
    {
      id: "domainToTable_16",
      source: "Domain",
      target: "TBL-YZFC",
      name: "Domain to Table TBL-YZFC"
    },
    {
      id: "domainToTable_17",
      source: "Domain",
      target: "TBL-JNFV",
      name: "Domain to Table TBL-JNFV"
    },
    {
      id: "domainToTable_18",
      source: "Domain",
      target: "TBL-DKVS",
      name: "Domain to Table TBL-DKVS"
    },

    //Table-to-Table Relationship

    {
      id: "TableToTable_1",
      source: "TBL-AVSHS",
      target: "TBL-BPXN",
      name: "TBL-AVSHS to TBL-BPXN"
    },
    {
      id: "TableToTable_2",
      source: "TBL-BPXN",
      target: "TBL-UIIF",
      name: "TBL-BPXN to TBL-UIIF"
    },
    {
      id: "TableToTable_3",
      source: "TBL-UIIF",
      target: "TBL-EMDDS",
      name: "TBL-UIIF to TBL-EMDDS"
    },
    {
      id: "TableToTable_4",
      source: "TBL-EMDDS",
      target: "TBL-UPDM",
      name: "TBL-EMDDS to TBL-UPDM"
    },
    {
      id: "TableToTable_5",
      source: "TBL-UPDM",
      target: "TBL-NSKM",
      name: "TBL-UPDM to TBL-NSKM"
    },
    {
      id: "TableToTable_6",
      source: "TBL-NSKM",
      target: "TBL-VZQK",
      name: "TBL-NSKM to TBL-VZQK"
    },
    {
      id: "TableToTable_7",
      source: "TBL-VZQK",
      target: "TBL-GBOV",
      name: "TBL-VZQK to TBL-GBOV"
    },
    {
      id: "TableToTable_8",
      source: "TBL-GBOV",
      target: "TBL-WEMD",
      name: "TBL-GBOV to TBL-WEMD"
    },
    {
      id: "TableToTable_9",
      source: "TBL-WEMD",
      target: "TBL-OVBC",
      name: "TBL-WEMD to TBL-OVBC"
    },
    {
      id: "TableToTable_10",
      source: "TBL-OVBC",
      target: "TBL-OEJL",
      name: "TBL-OVBC to TBL-OEJL"
    },
    {
      id: "TableToTable_11",
      source: "TBL-OEJL",
      target: "TBL-NSSJ",
      name: "TBL-OEJL to TBL-NSSJ"
    },
    {
      id: "TableToTable_12",
      source: "TBL-NSSJ",
      target: "TBL-TWMX",
      name: "TBL-NSSJ to TBL-TWMX"
    },
    {
      id: "TableToTable_13",
      source: "TBL-TWMX",
      target: "TBL-IZAN",
      name: "TBL-TWMX to TBL-IZAN"
    },
    {
      id: "TableToTable_14",
      source: "TBL-IZAN",
      target: "TBL-BZKB",
      name: "TBL-IZAN to TBL-BZKB"
    },
    {
      id: "TableToTable_15",
      source: "TBL-BZKB",
      target: "TBL-YZFC",
      name: "TBL-BZKB to TBL-YZFC"
    },
    {
      id: "TableToTable_16",
      source: "TBL-YZFC",
      target: "TBL-JNFV",
      name: "TBL-YZFC to TBL-JNFV"
    },
    {
      id: "TableToTable_17",
      source: "TBL-JNFV",
      target: "TBL-DKVS",
      name: "TBL-JNFV to TBL-DKVS"
    },
    {
      id: "TableToTable_18",
      source: "TBL-DKVS",
      target: "TBL-AVSHS",
      name: "TBL-DKVS to TBL-AVSHS"
    }
  ]
};

data.nodes.forEach((node) => {
  node.val = (node.size * 100) | (node.degrees / 10);
  if (node.isClusterNode) {
    node.clusterId = null;
  } else {
    const link = data.links.find((link) => link.target === node.id);
    node.clusterId = link && link.source;
  }
});

const Graph = (props) => {
  const { width = 0, height = 0 } = props;
  console.log(width, height);
  const forceRef = useRef(null);
  useEffect(() => {
    forceRef.current.d3Force("charge").strength(-200);
  });
  return (
    <ForceGraph2D
      graphData={data}
      width={width}
      height={height}
      backgroundColor="aliceblue"
      nodeLabel="id"
      ref={forceRef}
      nodeCanvasObjectMode={() => "after"}
      nodeCanvasObject={(node, ctx, globalScale) => {
        const nodeLabel = node.name;
        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "black";
        ctx.fillText(nodeLabel, node.x, node.y);
      }}
    />
  );
};

const MyGraph = withResizeDetector(Graph);

function App() {
  return (
    <div
      style={{
        background: "whitesmoke",
        width: 1350,
        height: 610
      }}
    >
      <MyGraph />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
