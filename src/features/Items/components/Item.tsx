export default function Item() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-100 border-t border-b">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h4 className="font-semibold">Free Shipping</h4>
          <p className="text-sm text-gray-600">On orders over $50</p>
        </div>
        <div className="text-center">
          <h4 className="font-semibold">Money-back</h4>
          <p className="text-sm text-gray-600">30 days guarantee</p>
        </div>
        <div className="text-center">
          <h4 className="font-semibold">Secure Payment</h4>
          <p className="text-sm text-gray-600">Secured by Stripe</p>
        </div>
        <div className="text-center">
          <h4 className="font-semibold">24/7 Support</h4>
          <p className="text-sm text-gray-600">Phone and Email</p>
        </div>
      </div>
    </section>
  );
}
