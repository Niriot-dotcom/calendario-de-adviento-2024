export async function getComponent(pageTemplate: string) {
  try {
    const module = await import(`../templates/${pageTemplate}.svelte`);
    return module.default || module;
  } catch (error) {
    console.error(
      `Error loading component for template ${pageTemplate}:`,
      error,
    );
    return null;
  }
}
