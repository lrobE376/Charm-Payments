import { getStripe } from '@/lib/stripe'
import type {
  CharmConnectAccount,
  CharmFinancialAccount,
  CharmOutboundTransfer,
  CharmTransaction,
} from '@/types/stripe'

/**
 * Creates a Stripe Connect Express account for a merchant.
 * Called when a merchant is approved.
 */
export async function createMerchantConnectAccount(
  email: string,
  businessName: string,
  merchantId: string
): Promise<CharmConnectAccount> {
  if (!process.env.STRIPE_SECRET_KEY) {
    return {
      id: crypto.randomUUID(),
      merchantId,
      stripeAccountId: `acct_demo_${merchantId}`,
      email,
      businessName,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
  }

  const account = await getStripe().accounts.create({
    type: 'express',
    email,
    business_profile: { name: businessName },
    capabilities: {
      transfers: { requested: true },
      treasury: { requested: true },
    },
    metadata: { charm_merchant_id: merchantId },
  })

  return {
    id: crypto.randomUUID(),
    merchantId,
    stripeAccountId: account.id,
    email,
    businessName,
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
}

/**
 * Creates a Treasury Financial Account for a merchant.
 * Called after Connect account is created and verified.
 */
export async function createMerchantFinancialAccount(
  stripeAccountId: string,
  merchantId: string
): Promise<CharmFinancialAccount> {
  // TODO: uncomment when Treasury access approved
  // const financialAccount = await stripe.treasury
  //   .financialAccounts.create(
  //     { supported_currencies: ['usd'],
  //       features: {
  //         inbound_transfers: { ach: { requested: true } },
  //         outbound_payments: {
  //           ach: { requested: true },
  //           us_domestic_wire: { requested: true },
  //         },
  //         deposit_insurance: { requested: true },
  //       }
  //     },
  //     { stripeAccount: stripeAccountId }
  //   )

  return {
    id: crypto.randomUUID(),
    merchantId,
    stripeAccountId,
    financialAccountId: `fa_demo_${merchantId}`,
    balance: 0,
    currency: 'usd',
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
}

/**
 * Gets merchant financial account balance (USD dollars).
 */
export async function getMerchantBalance(stripeAccountId: string, financialAccountId: string): Promise<number> {
  void stripeAccountId
  void financialAccountId
  // TODO: uncomment when Treasury approved
  // const account = await stripe.treasury
  //   .financialAccounts.retrieve(
  //     financialAccountId,
  //     { stripeAccount: stripeAccountId }
  //   )
  // return account.balance.cash.usd / 100

  return 1284.5
}

/**
 * Gets merchant transaction history from Treasury.
 * Amounts are in **cents** (Stripe convention).
 */
export async function getMerchantTransactions(
  stripeAccountId: string,
  financialAccountId: string,
  limit: number = 10
): Promise<CharmTransaction[]> {
  void stripeAccountId
  void limit
  // TODO: uncomment when Treasury approved
  // return await stripe.treasury.transactions.list(
  //   { financial_account: financialAccountId, limit },
  //   { stripeAccount: stripeAccountId }
  // )

  const now = Date.now()
  return [
    {
      id: 'txn_demo_1',
      financialAccountId,
      amount: 34000,
      currency: 'usd',
      type: 'credit',
      description: 'Payment settled — Marcus T.',
      status: 'posted',
      createdAt: new Date(now).toISOString(),
    },
    {
      id: 'txn_demo_2',
      financialAccountId,
      amount: -20000,
      currency: 'usd',
      type: 'debit',
      description: 'Wire transfer to Chase ****4821',
      status: 'posted',
      createdAt: new Date(now - 86400000).toISOString(),
    },
    {
      id: 'txn_demo_3',
      financialAccountId,
      amount: 12500,
      currency: 'usd',
      type: 'credit',
      description: 'Payment settled — Keisha R.',
      status: 'posted',
      createdAt: new Date(now - 172800000).toISOString(),
    },
  ]
}

/**
 * Initiates an outbound wire or ACH transfer.
 * Merchant moves money from wallet to their bank.
 * `amountCents` — amount in smallest currency unit.
 */
export async function createOutboundTransfer(
  stripeAccountId: string,
  financialAccountId: string,
  amountCents: number,
  routingNumber: string,
  accountNumber: string,
  accountHolderName: string,
  transferType: 'ach' | 'wire'
): Promise<CharmOutboundTransfer> {
  void stripeAccountId
  // TODO: uncomment when Treasury approved
  // const transfer = await stripe.treasury
  //   .outboundTransfers.create(
  //     {
  //       financial_account: financialAccountId,
  //       amount: amountCents,
  //       currency: 'usd',
  //       destination_payment_method_data: {
  //         type: 'us_bank_account',
  //         us_bank_account: {
  //           routing_number: routingNumber,
  //           account_number: accountNumber,
  //           account_holder_name: accountHolderName,
  //           account_type: 'checking',
  //         },
  //       },
  //       statement_descriptor: 'CHARM WALLET TRANSFER',
  //     },
  //     { stripeAccount: stripeAccountId }
  //   )

  return {
    id: `obt_demo_${crypto.randomUUID()}`,
    financialAccountId,
    amount: amountCents,
    currency: 'usd',
    destinationRoutingNumber: routingNumber,
    destinationAccountNumber: accountNumber,
    destinationAccountHolderName: accountHolderName,
    transferType,
    status: 'processing',
    createdAt: new Date().toISOString(),
  }
}

/**
 * Credits a merchant's financial account after NMI settlement.
 * Called by NMI webhook handler.
 */
export async function creditMerchantFromSettlement(
  stripeAccountId: string,
  financialAccountId: string,
  amountCents: number,
  description: string
) {
  void stripeAccountId
  void financialAccountId
  // TODO: implement via Stripe Treasury InboundTransfer or ReceivedCredit when NMI webhook fires
  console.log(`[Stripe] Credit ${amountCents} cents to ${financialAccountId} — ${description}`)
  return { success: true, amount: amountCents }
}
