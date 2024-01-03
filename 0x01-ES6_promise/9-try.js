export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result, 'Guardrail was processed');
  } catch (err) {
    queue.push(String(err), 'Guardrail was processed');
  }
  return queue;
}
