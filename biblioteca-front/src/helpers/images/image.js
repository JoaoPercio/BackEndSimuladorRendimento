export function getImageFromAssets(name) {
  return require.context('@/assets/images/', false, /\.png$/)(`./${name}`);
}
