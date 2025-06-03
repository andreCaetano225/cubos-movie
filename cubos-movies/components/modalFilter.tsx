"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { InputField } from "./inputFiel";

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FilterModal = ({ open, onOpenChange }: FilterModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#1c1c1e] text-white rounded-lg p-6 z-50 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold">Filtros</Dialog.Title>
            <Dialog.Close className="text-white text-xl cursor-pointer">
              ✕
            </Dialog.Close>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold">Data de Lançamento *</p>
              <div className="grid grid-cols-2 gap-2">
                <InputField id="releaseStart" label="De" type="date" />
                <InputField id="releaseEnd" label="Até" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold">Duração (em minutos) *</p>
              <div className="grid grid-cols-2 gap-2">
                <InputField
                  id="durationMin"
                  label="Mínima"
                  type="number"
                  placeholder="Ex: 90"
                />
                <InputField
                  id="durationMax"
                  label="Máxima"
                  type="number"
                  placeholder="Ex: 180"
                />
              </div>
            </div>

            <InputField
              id="minPopularity"
              label="Popularidade mínima"
              type="number"
              placeholder="Ex: 7.5"
            />

            <div className="flex justify-end gap-2 pt-4">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-4 py-2 bg-secondary rounded hover:bg-secondary-hover transition"
                >
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="px-4 py-2 bg-primary rounded hover:bg-primary-hover transition"
              >
                Aplicar Filtros
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
