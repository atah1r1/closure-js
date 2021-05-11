var G_trees = [];

class Tree {
	constructor (index, ismine, isdormant) {
		this.index = index;
		this.ismine = ismine;
		this.isdormant = isdormant;
	}

}

function GetTreesByIndex(index) {
	let ret  = null;
	G_trees.forEach((tree) => {
		if (tree.index === index) {
			ret = tree;
		}
	})
	return ret;
}

index1 = 10
index2 = 20
index3 = 30

ismine1 = 1;
ismine2 = 0;
ismine3 = 0;

isdormant1 = true;
isdormant2 = true;
isdormant3 = true;

G_trees.push(new Tree(index1, ismine1, isdormant1));
G_trees.push(new Tree(index2, ismine2, isdormant2));
G_trees.push(new Tree(index3, ismine3, isdormant3));

console.log(GetTreesByIndex(200));
// console.log(G_trees)
// GetTreesByIndex(10)
// console.log(haha);