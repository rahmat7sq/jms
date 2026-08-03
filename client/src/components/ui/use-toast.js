import { toast as sonnerToast } from "sonner"

function toast({ title, description, variant, ...props }) {
  const options = { description, ...props }

  if (variant === "destructive") {
    return sonnerToast.error(title, options)
  }
  return sonnerToast(title, options)
}

function useToast() {
  return {
    toast,
    dismiss: (id) => sonnerToast.dismiss(id),
  }
}

export { useToast, toast }