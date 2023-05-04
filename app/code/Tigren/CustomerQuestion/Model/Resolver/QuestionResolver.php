<?php

namespace Tigren\CustomerQuestion\Model\Resolver;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Tigren\CustomerQuestion\Model\TigrenCustomerQuestionFactory;

class QuestionResolver implements ResolverInterface
{
    private $questionFactory;

    public function __construct(TigrenCustomerQuestionFactory $questionFactory)
    {
        $this->questionFactory = $questionFactory;
    }

    public function resolve(Field $field, $context, ResolveInfo $info, array $value = null, array $args = null)
    {
        $id = $args['id'];
        $writer = new \Zend_Log_Writer_Stream(BP . '/var/log/custom.log');
        $logger = new \Zend_Log();
        $logger->addWriter($writer);
        $logger->info(print_r($id, true));
        try {
            $question = $this->questionFactory->create()->load($id);
        } catch (NoSuchEntityException $e) {
            throw new GraphQlNoSuchEntityException(__($e->getMessage()));
        }
        return [$question->getData()];
    }
}
