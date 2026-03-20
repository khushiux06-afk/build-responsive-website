import React, { useState, createContext, useContext, useCallback, ReactNode } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmOptions {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
}

type ConfirmFn = (opts: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn>(() => Promise.resolve(false));

export const useConfirm = () => useContext(ConfirmContext);

interface Pending {
  opts: ConfirmOptions;
  resolve: (v: boolean) => void;
}

export const ConfirmProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pending, setPending] = useState<Pending | null>(null);

  const confirm: ConfirmFn = useCallback((opts) => {
    return new Promise<boolean>((resolve) => {
      setPending({ opts, resolve });
    });
  }, []);

  const handleYes = () => { pending?.resolve(true); setPending(null); };
  const handleNo = () => { pending?.resolve(false); setPending(null); };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {pending && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-in">
            <div className="p-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto ${pending.opts.danger !== false ? 'bg-red-100' : 'bg-blue-100'}`}>
                <AlertTriangle size={22} className={pending.opts.danger !== false ? 'text-red-600' : 'text-blue-600'} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                {pending.opts.title || 'Are you sure?'}
              </h3>
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                {pending.opts.message}
              </p>
            </div>
            <div className="flex border-t border-gray-100">
              <button
                onClick={handleNo}
                className="flex-1 py-3.5 text-gray-600 font-semibold text-sm hover:bg-gray-50 rounded-bl-2xl transition-colors border-r border-gray-100"
              >
                {pending.opts.cancelLabel || 'Cancel'}
              </button>
              <button
                onClick={handleYes}
                className={`flex-1 py-3.5 font-semibold text-sm rounded-br-2xl transition-colors ${pending.opts.danger !== false ? 'text-red-600 hover:bg-red-50' : 'text-blue-600 hover:bg-blue-50'}`}
              >
                {pending.opts.confirmLabel || 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};
