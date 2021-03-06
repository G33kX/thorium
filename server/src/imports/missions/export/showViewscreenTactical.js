import App from "../../../app";
import addAsset from "../../addAsset";

export default function buildExport(zip, i, type) {
  if (i.event === "showViewscreenTactical") {
    const args = JSON.parse(i.args);
    if (!args) return;
    const mapId = args.mapId;
    const tactical = App.tacticalMaps.find(m => m.id === mapId);
    return exportTactical(zip, tactical, type);
  }
}

export function exportTactical(zip, tactical, type) {
  const assets = [];
  tactical.layers.forEach(l => {
    if (l.type === "image") assets.push(l.image);
    if (l.type === "video") assets.push(l.asset);
    if (l.type === "objects") {
      l.items.forEach(item => assets.push(item.icon));
    }
  });
  assets.forEach(key => {
    addAsset(key, zip, type);
  });
  return tactical;
}
