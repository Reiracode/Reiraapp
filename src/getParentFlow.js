// JS RECURSIVE  遞迴二種方式
const depobject = {
  id: "TP000",
  name: "CEO",
  childdep: [
    {
      id: "TP002",
      name: "IT",
      childdep: [
        {
          id: "TP006",
          name: "MIS",
        },
      ],
    },
    {
      id: "TP005",
      name: "AUO",
      childdep: [
        {
          id: "TP015",
          name: "AUO_CHILD",
        },
      ],
    },
  ],
};

function getParPath(model, id) {
  var path, item = { id: model.id };

  if (!model || typeof model !== "object") return;

  if (model.id === id) {
    console.log(item);
    return [item];
  }  
 
    (model.childdep || []).some((child) => {
    console.log(child);
    path = getParPath(child, id);
  });

  return path && [item, ...path];
}



const getFlow = getParPath(depobject, "TP005");
console.log(getFlow);


//  way2

const depts = [
  { id: "TP000", name: "BOSS", up_dep: "no" },
  { id: "TP001", name: "AUO", up_dep: "TP000" },
  { id: "TP002", name: "MIS", up_dep: "TP001" },
  { id: "TP003", name: "FA", up_dep: "TP001" },
  { id: "TP031", name: "FAA", up_dep: "TP003" },
  { id: "TP021", name: "MISA", up_dep: "TP002" },
  { id: "TP022", name: "MISA", up_dep: "TP002" },
];

function topParent(id) {
  let path,
    item = { id: id, name: "" };
  let obj = depts.find((v) => {
    item.name = v.name;
    return v.id == id;
  });
  console.log(obj);
  if (obj.up_dep == "no") {
    return [item];
  } else {
    path = topParent(obj.up_dep);
  }
  console.log([item, ...path]);
  return path && [item, ...path];
}
let s = topParent("TP003");
