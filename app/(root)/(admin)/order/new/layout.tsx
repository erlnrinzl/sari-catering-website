export default function CreateOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-8 py-4 h-full">
      <div>
        <h1 className="text-xl font-medium leading-none text-slate-900">
          Create New Order
        </h1>
        {children}
      </div>
    </section>
  );
}
