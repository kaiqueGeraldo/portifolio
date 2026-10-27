import { describe, expect, it } from "vitest";
import { selectProjects } from "./project-selection";
import { featuredProjects } from "./featured-projects";
import { projetos } from "./projects";

describe("project catalog", () => {
  it("keeps editorial order when catalog order changes", () => {
    const catalog = [{ id: "b" }, { id: "c" }, { id: "a" }];
    expect(selectProjects(catalog, ["a", "b"])).toEqual([
      catalog[2],
      catalog[0],
    ]);
    expect(catalog.map((p) => p.id)).toEqual(["b", "c", "a"]);
  });
  it("rejects missing and duplicate featured IDs", () => {
    expect(() => selectProjects([{ id: "a" }], ["missing"])).toThrow(
      "Unknown featured",
    );
    expect(() => selectProjects([{ id: "a" }], ["a", "a"])).toThrow(
      "Duplicate featured",
    );
    expect(() => selectProjects([{ id: "a" }, { id: "a" }], ["a"])).toThrow(
      "Duplicate project",
    );
  });
  it("features the approved projects while retaining Uber in the catalog", () => {
    expect(projetos.map(p => p.id)).toEqual([
      "controle-financeiro", "hbu-gestao-cirurgias", "mind-task", "amazon-scraper",
      "pet-dev", "uber-clone", "olx-clone", "agita-senai",
    ]);
    expect(featuredProjects.map((p) => p.id)).toEqual([
      "controle-financeiro",
      "hbu-gestao-cirurgias",
      "mind-task",
    ]);
    expect(projetos.some((p) => p.id === "uber-clone")).toBe(true);
    expect(projetos.some((p) => p.id.startsWith("campus-sync"))).toBe(false);
  });
  it("allows projects without an invented duration and with both translations", () => {
    for (const id of ["controle-financeiro", "hbu-gestao-cirurgias"]) {
      const project = projetos.find((p) => p.id === id)!;
      expect(project.duracao).toBeUndefined();
      expect(project.descricao["pt-BR"]).toBeTruthy();
      expect(project.descricao.en).toBeTruthy();
      expect(project.status["pt-BR"]).toBeTruthy();
      expect(project.status.en).toBeTruthy();
    }
  });
});
