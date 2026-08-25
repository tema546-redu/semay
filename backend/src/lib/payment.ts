export const PAYMENT = {
  telebirrPhone: "0916422465",
  telebirrName: "Temamen Akiso",
  cbeAccount: "1000385422982",
  cbeName: "Temamen Akiso",
  bankName: "Commercial Bank of Ethiopia (CBE)",
  currency: "ETB",
  note: "After you pay, enter the transaction reference and mark as paid. Owner will confirm.",
}

export function paymentInstructions(amount: number, plan: string, orgName: string) {
  return {
    amount,
    currency: "ETB",
    plan,
    organization: orgName,
    methods: [
      {
        id: "telebirr",
        label: "Telebirr",
        phone: PAYMENT.telebirrPhone,
        name: PAYMENT.telebirrName,
        steps: [
          "Open Telebirr app",
          `Send ${amount} ETB to ${PAYMENT.telebirrPhone}`,
          "Copy the transaction ID / reference",
          "Paste it on the Billing page and click I paid",
        ],
      },
      {
        id: "cbe",
        label: "CBE Bank transfer",
        account: PAYMENT.cbeAccount,
        name: PAYMENT.cbeName,
        bank: PAYMENT.bankName,
        steps: [
          "Open CBE Birr / your bank app",
          `Transfer ${amount} ETB to account ${PAYMENT.cbeAccount}`,
          `Account name: ${PAYMENT.cbeName}`,
          "Copy the reference number",
          "Paste it on Billing and click I paid",
        ],
      },
    ],
  }
}