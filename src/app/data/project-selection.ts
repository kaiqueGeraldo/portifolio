/** Resolve editorial order independently of catalog order, in O(n + k). */
export function selectProjects<T extends { id: string }>(
  catalog: readonly T[],
  ids: readonly string[],
): T[] {
  const byId = new Map(catalog.map((project) => [project.id, project]));
  if (byId.size !== catalog.length)
    throw new Error("Duplicate project ID in catalog");
  if (new Set(ids).size !== ids.length)
    throw new Error("Duplicate featured project ID");
  return ids.map((id) => {
    const project = byId.get(id);
    if (!project) throw new Error(`Unknown featured project: ${id}`);
    return project;
  });
}
