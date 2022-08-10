const rms = (name) => {
    return name?.replace(/ /g, '_')?.replace("/", "_")?.toLowerCase();
}

export default rms;