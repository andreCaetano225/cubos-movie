"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { InputField } from "./inputFiel";
import { useImagePreview } from "../hooks/useImagePreview";

interface AddMovieDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddMovieDrawer = ({ open, onOpenChange }: AddMovieDrawerProps) => {
  const cover = useImagePreview();
  const background = useImagePreview();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-[90%] sm:w-[600px] max-w-full bg-[#1c1c1e] text-white shadow-lg p-6 overflow-y-auto z-50 transition-all">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold">
              Adicionar Filme
            </Dialog.Title>
            <Dialog.Close className="text-white text-xl cursor-pointer">
              ✕
            </Dialog.Close>
          </div>

          <form className="space-y-4">
            <InputField
              id="name"
              label="Nome do Filme"
              placeholder="Digite o nome do filme"
            />

            <InputField
              id="subtitle"
              label="Subtítulo"
              placeholder="Digite o subtítulo do filme"
            />

            <div className="flex flex-col">
              <label htmlFor="synopsis" className="text-sm mb-1">
                Sinopse
              </label>
              <textarea
                id="synopsis"
                placeholder="Digite a sinopse"
                className="w-full px-4 py-2 bg-[#2a2730] rounded outline-none"
                rows={4}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">Capa do Filme</label>
              <input
                type="file"
                accept="image/*"
                onChange={cover.onFileChange}
                className="text-white"
              />
              {cover.preview && (
                <img
                  src={cover.preview}
                  alt="Capa do Filme"
                  className="w-[10rem] max-h-64 object-cover rounded border border-white/10"
                />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">Capa de Fundo</label>
              <input
                type="file"
                accept="image/*"
                onChange={background.onFileChange}
                className="text-white"
              />
              {background.preview && (
                <img
                  src={background.preview}
                  alt="Capa de Fundo"
                  className="w-[10rem] max-h-64 object-cover rounded border border-white/10"
                />
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                id="popularity"
                label="Popularidade"
                placeholder="Ex: 8.9"
                type="number"
              />
              <InputField
                id="voteCount"
                label="Total de Votos"
                placeholder="Ex: 1234"
                type="number"
              />
              <InputField
                id="approval"
                label="% de Aprovação"
                placeholder="Ex: 92"
                type="number"
              />
              <InputField
                id="releaseDate"
                label="Data de Lançamento"
                type="date"
              />
              <InputField
                id="duration"
                label="Duração (min)"
                placeholder="Ex: 120"
                type="number"
              />
              <InputField
                id="language"
                label="Idioma"
                placeholder="Ex: pt-BR"
              />
              <InputField
                id="budget"
                label="Orçamento (US$)"
                placeholder="Ex: 150000000"
                type="number"
              />
              <InputField
                id="revenue"
                label="Receita (US$)"
                placeholder="Ex: 300000000"
                type="number"
              />
              <InputField
                id="profit"
                label="Lucro (US$)"
                placeholder="Ex: 150000000"
                type="number"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="status" className="text-sm mb-1">
                Situação
              </label>
              <select
                id="status"
                className="w-full px-4 py-2 bg-[#2a2730] rounded outline-none text-white"
              >
                <option value="lançado">Lançado</option>
                <option value="em_producao">Em Produção</option>
                <option value="cancelado">Cancelado</option>
                <option value="indisponivel">Indisponível</option>
              </select>
            </div>

            <InputField
              id="genres"
              label="Gêneros (separados por vírgula)"
              placeholder="Ex: Ação, Ficção Científica, Aventura"
            />

            <InputField
              id="trailer"
              label="Link do Trailer (YouTube)"
              placeholder="Cole aqui o link do trailer"
              type="url"
            />

            <div className="flex justify-end gap-2 pt-4">
              <Dialog.Close className="px-4 py-2 bg-secondary rounded hover:bg-secondary-hover transition">
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="px-4 py-2 bg-primary rounded hover:bg-primary-hover transition"
              >
                Adicionar Filme
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
